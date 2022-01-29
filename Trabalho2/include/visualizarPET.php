<?php
include_once("../classes/pet.php");
if (isset($_SESSION['administrador'])){
?>
<div class="row">
    <div class="col-lg-6">
        <!-- Collapsable Card Example -->
        <div class="card shadow mb-8">
            <!-- Card Header - Accordion -->
            <a href="#collapseCardExample" class="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardExample">
                <h6 class="m-0 font-weight-bold text-primary">Pesquisar Clientes</h6>
            </a>
            <!-- Card Content - Collapse -->
            
            <div class="collapse show" id="collapseCardExample">
                <div class="card-body">
                    <form method="POST" action="">
                        <div class="mb-3">
                            <label for="cpf" class="form-label">Nome</label>
                            <input type="text" class="form-control" id="cpf-pet" aria-describedby="cpfHelp" name="nomePet">
                            <div id="cpf" class="form-text"></div>
                        </div>
                        <button type="submit" class="btn btn-primary">Pesquisar por Nome</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<?php
$objPet = new Pet();
//$objCliente->selecionarPorId(11);

if (isset($_GET['id'])) {
    $objPet ->selecionarPorId($_GET['id']);
    if (isset($_POST['nomePet'])) {
        $objPet ->selecionarPorNome($_POST['nomePet']);
    } 
} else if (isset($_POST['nomePet'])) {
    $objPet ->selecionarPorNome($_POST['nomePet']);
}  else {
    $objPet ->selecionarPets();
}

if ($objPet ->retornoBD != null) {
?>
    <br/>
    <div class="row">
        <div class="col-12">
            <table class="table table-striped table-hover">
                <tr>
                    <th width="20%">#</th>
                    <th width="20%">Nome PET</th>
                    <th width="20%">Nome do Dono</th>
                    <th width="20%">Editar</th>
                    <th width="20%">Deletar</th>
                </tr>

                <?php

                while ($retorno = $objPet->retornoBD->fetch_object()) {
                    echo '<tr><td>' . $retorno->id_pet . '</td><td>' .
                        $retorno->nome_pet . '</td><td>' .
                        $retorno->nome_cliente . '</td>';

                    echo '<td><a href="?rota=editar_pet&id='.$retorno->id_pet.'" class="btn btn-info btn-circle btn-sm"><i class="fas fa-list"></i></a></td>';
                    echo '<td><a href="#" class="btn btn-danger btn-circle btn-sm" onclick=\'deletarPet("' .$retorno->id_pet. '")\';><i class="fas fa-trash"></i></a></td></tr>';
                }

                ?>
            </table>
        </div>
    </div>
<?php
}
}else{
    header("Location:../index.html");
}?>