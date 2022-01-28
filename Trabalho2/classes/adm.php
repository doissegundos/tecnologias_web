<?php
include_once("../classes/Conexao.php");
include_once("../classes/Utilidades.php");
class Adm{

   private $nome;
   private $email;
   private $id;
   private $utilidades;
   private $senha;


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
    public function getSenha(){
        return $this->senha;
    }
    public function getEmail(){
        return $this->email;
    }
    

    public function setEmail($email){
        //validacao
        return $this->email= $email;
    }
    public function setNome($nome){
        //validacao
        return $this->nome =  mb_strtoupper($nome, 'UTF-8');
    }
    public function setSenha($senha){
        //validacao
        return $this->senha=$senha;
    }
    public function setId($id){
        //validacao
        return $this->id=$id;
    }


    public function cadastrar(){
        if($this->getEmail()!=null){
            
            $interacaoMySql = $this->conexaoBD->prepare("INSERT INTO adm (nome_adm, email_adm, senha_adm) 
            VALUES (?, ?, ?)");
            $interacaoMySql->bind_param('sss', $this->getNome(),$this->getEmail(),$this->getSenha());
            $retorno= $interacaoMySql->execute();

           $id= mysqli_insert_id($this->conexaoBD);
           echo "<script>alert('Administrador cadastrado com sucesso!')</script>";
           return $this->utilidades->validaRedirecionarADM( $retorno, $id, "index.php", "O cliente foi cadastrado com sucesso!");
        }else{
            return $this->utilidades->mesagemParaUsuario("Erro, email não cadastrado!");
        }
    }

  }
