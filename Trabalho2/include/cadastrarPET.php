<?php
if (isset($_SESSION['administrador'])){
?>

<div class="container">
    <div class="row">
        <div class="col-10">
            <form method="POST" action="">
                
                <div class="mb-3">
                    <label for="nome" class="form-label">Nome do PET</label>
                    <input type="text" class="form-control" id="nome-pet" aria-describedby="nomeHelp" name="nomePET" >
                    <div id="nomeHelp" class="form-text"></div>
                </div>
               
                <div class="mb-3">
                    <label for="cpf" class="form-label">CPF do dono do PET</label>
                    <input type="text" class="form-control" id="cpf-cliente" aria-describedby="cpfHelp" name="cpfPET" >
                    <div id="cpf" class="form-text"></div>
                </div>

                
                
                <input type="hidden" name="formCadastrarPET">
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>


        </div>
    </div>
</div>
<?php

}else{
    header("Location:../index.html");
}?>