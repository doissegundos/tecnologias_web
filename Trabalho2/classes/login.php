<?php
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
        session_start();
        $interacaoMySql = $this->conexaoBD->prepare("select * from adm where email_adm='?' and senha_adm='?'");
        $interacaoMySql->bind_param('ss',$email,$senha);
        $retorno= $interacaoMySql->execute();
        // if($retorno){
        //     $_SESSION['administrador'] = 'true';
        //     $this->utilidades->redireciona("../produto/admin.php");
        // }else{
        //     $this->utilidades->alerta(false);
        // }
        
    }

  }

//   $interacaoMySql = $this->conexaoBD->prepare("INSERT INTO cliente (nome_cliente, email_cliente, cpf_cliente, celular_cliente, rua_cliente, cidade_cliente, estado_cliente) 
//             VALUES (?, ?, ?, ?, ?, ?, ?)");
//             $interacaoMySql->bind_param('sssssss', $this->getNome(),$this->getEmail(),$this->getCPF(),$this->getCelular(),$this->getRua(),$this->getCidade(),$this->getEstado());
//             $retorno= $interacaoMySql->execute();
// echo "<script>alert('Administrador cadastrado com sucesso!.')</script>";
// $sql = "select count(1) from adm where email_adm='$email' and senha_adm='$senha'";
// $retorno = $this->conexaoBD->query($sql);
// $teste = mysqli_num_rows($retorno);
// echo $teste;