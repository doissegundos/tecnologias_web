<?php
include_once("../classes/Conexao.php");
include_once("../classes/Utilidades.php");
class Cliente{

   private $nome;
   private $cpf;
   private $email;
   private $id;
   private $utilidades;
   private $celular;
   private $rua;
   private $cidade;
   private $estado;

   public $retornoBD;
   public $conexaoBD;
   
   public function  __construct()   {      
      $objConexao= new Conexao();
      $this->conexaoBD= $objConexao->getConexao();
      $this->utilidades= new Utilidades();

   }

    public function getId(){
        return $this->id;
    }
    public function getNome(){
        return $this->nome;
    }
    public function getCPF(){
        return $this->cpf;
    }
    public function getEmail(){
        return $this->email;
    }
    public function getCelular(){
        return $this->celular;
    }
    public function getRua(){
        return $this->rua;
    }
    public function getCidade(){
        return $this->cidade;
    }
    public function getEstado(){
        return $this->estado;
    }

    public function setEmail($email){
        //validacao
        return $this->email= $email;
    }
    public function setNome($nome){
        //validacao
        return $this->nome =  mb_strtoupper($nome, 'UTF-8');
    }
    public function setCPF($cpf){
        //validacao
        return $this->cpf=$cpf;
    }
    public function setId($id){
        //validacao
        return $this->id=$id;
    }

    public function setCelular($celular){
        //validacao
        return $this->celular=$celular;
    }
    public function setRua($rua){
        //validacao
        return $this->rua=$rua;
    }
    public function setCidade($cidade){
        //validacao
        return $this->cidade=$cidade;
    }
    public function setEstado($estado){
        //validacao
        return $this->estado=$estado;
    }

    public function cadastrar(){

        if($this->getCPF()!=null){
            
            $interacaoMySql = $this->conexaoBD->prepare("INSERT INTO cliente (nome_cliente, email_cliente, cpf_cliente, celular_cliente, rua_cliente, cidade_cliente, estado_cliente) 
            VALUES (?, ?, ?, ?, ?, ?, ?)");
            $interacaoMySql->bind_param('sssssss', $this->getNome(),$this->getEmail(),$this->getCPF(),$this->getCelular(),$this->getRua(),$this->getCidade(),$this->getEstado());
            $retorno= $interacaoMySql->execute();

           $id= mysqli_insert_id($this->conexaoBD);
          
           return $this->utilidades->validaRedirecionar( $retorno, $id, "admin.php?rota=visualizar_cliente", "O cliente foi cadastrado com sucesso!");
        }else{
            return $this->utilidades->mesagemParaUsuario("Erro, cadastro não realizado! CPF não foi infomado.");
        }
    }
    public function editar(){

        if($this->getId()!=null){
            
            $interacaoMySql = $this->conexaoBD->prepare("UPDATE  cliente set  nome_cliente=?, email_cliente=?, cpf_cliente=?, celular_cliente=?, rua_cliente=?, cidade_cliente=?, estado_cliente=?
            where id_cliente=?");
            $interacaoMySql->bind_param('sssssssi', $this->getNome(),$this->getEmail(),$this->getCPF(),$this->getCelular(),$this->getRua(),$this->getCidade(),$this->getEstado(),$this->getId());
            $retorno=$interacaoMySql->execute();
            if ($retorno === false) {
                trigger_error($this->conexaoBD->error, E_USER_ERROR);
              }

           $id= mysqli_insert_id($this->conexaoBD);
          
           return $this->utilidades->validaRedirecionar( $retorno, $this->getId(), "admin.php?rota=visualizar_cliente", "Os dados do cliente foram alterados com sucesso!");
        }else{
            return $this->utilidades->mesagemParaUsuario("Erro! CPF não foi infomado.");
        }
    }

    public function selecionarPorId($id){
        $sql="select * from cliente where id_cliente=$id";
        $this->retornoBD=$this->conexaoBD-> query($sql);
    }
    public function selecionarPorCPF($cpf){
        $sql="select * from cliente where cpf_cliente=$cpf";
        $this->retornoBD=$this->conexaoBD-> query($sql);
    }
    public function selecionarPorNome($nome){
        $sql="select * from cliente where nome_cliente='$nome'";
        $this->retornoBD=$this->conexaoBD-> query($sql);
    }
    public function selecionarClientes(){
        $sql="select * from cliente order by data_cadastro_cliente DESC";
        $this->retornoBD=$this->conexaoBD-> query($sql);
    }

    public function deletar($id){
        //se for deletar um cliente que tem pet cadastrado, deve ser deletado o pet também. Pois não existe um PET sem dono. 
        $sql="DELETE from pet where id_cliente=$id";
        $this->retornoBD=$this->conexaoBD-> query($sql);
        $sql="DELETE from cliente where id_cliente=$id";
        $this->retornoBD=$this->conexaoBD-> query($sql);
        $this->utilidades->validaRedirecionaAcaoDeletar($this->retornoBD,'admin.php?rota=visualizar_cliente','O cliente foi deletado com sucesso!');
    }
  }



