<?php
include_once("../classes/Conexao.php");
include_once("../classes/Utilidades.php");
class Pet{

   private $nome;
   private $cpf;
   private $id;

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


    public function cadastrar(){
        $cpf = $this->getCPF();
        $nome = $this->getNome();
        $sql="select * from cliente where cpf_cliente='$cpf'";
        $result = mysqli_query($this->conexaoBD,$sql);
        if(mysqli_num_rows($result)==1){
            $this->retornoBD=$this->conexaoBD-> query($sql);
            $retorno = $this->retornoBD->fetch_object();
            $sql="INSERT INTO pet (nome_pet, id_cliente,nome_cliente) VALUES ('$nome', $retorno->id_cliente,'$retorno->nome_cliente')";
            $result = mysqli_query($this->conexaoBD,$sql);
            $id= mysqli_insert_id($this->conexaoBD);
            return $this->utilidades->validaRedirecionar( $result, $id, "admin.php?rota=visualizar_pet", "O pet foi cadastrado com sucesso!");

         }else{
            echo "<script>alert('Não existe um cliente com esse CPF!!')</script>";
      
         }
    }
    
    public function editar(){


        if($this->getId()!=null){
            
            $interacaoMySql = $this->conexaoBD->prepare("UPDATE  pet set  nome_pet=? 
            where id_pet=?");
            $interacaoMySql->bind_param('si', $this->getNome(),$this->getId());
            $retorno=$interacaoMySql->execute();
            if ($retorno === false) {
                trigger_error($this->conexaoBD->error, E_USER_ERROR);
              }

           $id= mysqli_insert_id($this->conexaoBD);
          
           return $this->utilidades->validaRedirecionar( $retorno, $this->getId(), "admin.php?rota=visualizar_pet", "Os dados do pet foram alterados com sucesso!");
        }else{
            return $this->utilidades->mesagemParaUsuario("Erro! CPF não foi infomado.");
        }
    }

    public function selecionarPorId($id){
        $sql="select * from pet where id_pet=$id";
        $this->retornoBD=$this->conexaoBD-> query($sql);
    }

    public function selecionarPorNome($nome){
        $sql="select * from pet where nome_pet='$nome'";
        $this->retornoBD=$this->conexaoBD-> query($sql);
    }
    public function selecionarPets(){
        $sql="select * from pet order by data_cadastro_pet DESC";
        $this->retornoBD=$this->conexaoBD-> query($sql);
    }

    public function deletar($id){
        $sql="DELETE from pet where id_pet=$id";
        $this->retornoBD=$this->conexaoBD-> query($sql);
        $this->utilidades->validaRedirecionaAcaoDeletar($this->retornoBD,'admin.php?rota=visualizar_pet','O pet foi deletado com sucesso!');
    }
  }

