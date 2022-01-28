<?php
//session_start();
include_once("../classes/Conexao.php");
include_once("../classes/Utilidades.php");
class Login{


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

    public function verificar($email,$senha){      
      $sql="select * from adm where email_adm='$email' and senha_adm='$senha'";
      $this->retornoBD=$this->conexaoBD-> query($sql);
      $result = mysqli_query($this->conexaoBD,$sql);
      if(mysqli_num_rows($result)>0){
         //isset($_SESSION['administrador']) = 'true';
         echo "<script>alert('Seja bem vindo!!')</script>";
         $this->utilidades->redireciona("../produto/admin.php");
      }else{
         echo "<script>alert('Usuário ou senha incorretos!!')</script>";
         $this->utilidades->redireciona("index.php");

      }
   
   }

  }

//   public function verificar($email,$senha){
//    echo "<script>alert('Operacao executada com sucesso!')</script>";        
//    $sql="select * from adm where email_adm='$email' and senha_adm='$senha'";
//    $this->retornoBD=$this->conexaoBD-> query($sql);
//    $result = mysqli_query($this->conexaoBD,$sql);
//    if(mysqli_num_rows($result)>0){
//       echo "<script>alert('ENTROU')</script>";
//    }else{
//       echo "<script>alert('DEU RUIM AGAINNN')</script>";
//    }

// }