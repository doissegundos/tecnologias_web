<?php
include_once("../classes/Cliente.php");
include_once("../classes/pet.php");


if(isset($_POST['idClienteDeletar'])){
    $objCliente = new Cliente();
    $objCliente->deletar($_POST['idClienteDeletar']);
}


$objPet = new Pet();

if(isset($_POST['idPetDeletar'])){
    echo "<script>alert('Operacao nao foi executada!')</script>";
    $objPet = new Pet();
    $objPet ->deletar($_POST['idPetDeletar']);
}
