<?php
if (isset($_SESSION['administrador'])){
?>

<div class="container">
    <div class="row">
        <div class="col-10">
            <form method="POST" action="">

                <div class="mb-3">
                    <label for="nome" class="form-label">Nome do pet</label>
                    <input type="text" class="form-control" id="nome-pet" aria-describedby="nomeHelp" name="nomePet" >
                    <div id="nomeHelp" class="form-text"></div>
                </div>
               
                <div class="mb-3">
                    <label for="cpf" class="form-label">CPF do cliente</label>
                    <input type="text" class="form-control" id="cpf-cliente" aria-describedby="cpfHelp" name="cpfCliente" >
                    <div id="cpf" class="form-text"></div>
                </div>

                <div class="mb-3">
                    <label for="data-consulta" class="form-label">Data</label>
                    <input type="date"  class="form-control" id="data-consulta" aria-describedby="dataHelp" name="dataConsulta" value="<?php date("Y-m-d") ?>" min="<?php date("Y-m-d") ?>" required>
                    <div id="dataHelp" class="form-text"></div>
                </div>
                <div class="mb-3">
                    <label for="hora-consulta" class="form-label">Hora</label>
                    <input type="time" class="form-control" id="hora-consulta" aria-describedby="horaHelp" name="horaConsulta"  min="09:00" max="18:00" required>
                    <div id="horaHelp" class="form-text"></div>
                </div>
                <div class="mb-3">
                    <label for="obs" class="form-label">Observações</label>
                    <input type="text" class="form-control" id="obs-cliente" aria-describedby="obsHelp" name="obsConsulta" >
                    <div id="obs" class="form-text"></div>
                </div>
               
                
                
                <input type="hidden" name="formCadastrarConsulta">
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>


        </div>
    </div>
</div>
<?php

}else{
    header("Location:../index.html");
}?>