<?php
include_once("../classes/pet.php");
if (isset($_SESSION['administrador'])){
$objPet = new Pet();
if (isset($_GET['id'])) {
    $objPet->selecionarPorId($_GET['id']);
}
$retorno = $objPet->retornoBD->fetch_object();
?>

<div class="container">
    <div class="row">
        <div class="col-10">
            <form method="POST" action="">

                <div class="mb-3">
                    <label for="nome" class="form-label">Alterar nome do Pet</label>
                    <input type="text" class="form-control" id="nome-pet" aria-describedby="nomeHelp" name="nomePet" value="<?php echo $retorno->nome_pet; ?>">
                    <div id="emailHelp" class="form-text"></div>
                </div>
               
              
                <input type="hidden" value="<?php echo $retorno->id_pet; ?>" name="idPet" >
                <input type="hidden" name="formEditarPet">
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>


        </div>
    </div>
</div>
<?php

}else{
    header("Location:../index.html");
}
?>