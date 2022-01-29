<?php
include_once("../classes/Conexao.php");
include_once("../classes/Utilidades.php");


function cadastrarConsulta($nome_pet,$cpf_cliente,$data,$hora,$obs){
    $objConexao= new Conexao();
    $conexaoBD= $objConexao->getConexao();
    $utilidades= new Utilidades();

    //$sql="select * from cliente where cpf_cliente='$cpf_cliente'";
    $sql = "SELECT pet.* FROM pet,cliente WHERE cliente.cpf_cliente='$cpf_cliente' and pet.id_cliente=cliente.id_cliente and pet.nome_pet='$nome_pet'";
    $result = mysqli_query($conexaoBD,$sql);
    if(mysqli_num_rows($result)==1){
        $retornoBD=$conexaoBD-> query($sql);
        $retorno = $retornoBD->fetch_object();
        $sql="INSERT INTO consulta (id_pet, id_cliente,nome_pet,data_consulta,hora_consulta,obs_consulta) VALUES ($retorno->id_pet, $retorno->id_cliente,'$retorno->nome_pet','$data','$hora','$obs')";
        $result = mysqli_query($conexaoBD,$sql);
        $id= mysqli_insert_id($conexaoBD);
        return $utilidades->validaRedirecionar( $result, $id, "admin.php?rota=visualizar_consulta", "O pet foi cadastrado com sucesso!");

    }else{
        echo "<script>alert('Não existe um cliente com esse CPF ou animal com este nome!!')</script>";
  
     }

}

function selecionarConsultas(){
    $objConexao= new Conexao();
    $conexaoBD= $objConexao->getConexao();
    $sql="select * from consultas";
    $retornoBD=$conexaoBD-> query($sql);
}

?>


