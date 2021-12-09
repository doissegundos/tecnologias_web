const btn = document.querySelector('#botao');
        // handle button click
btn.onclick = function () {
    nome = document.querySelector("#nome")
    const rbs = document.querySelectorAll('input[name="inlineRadioOptions"]');
    let selectedValue;
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    alert(selectedValue)
    //alert(nome.value);
};
 /*  
 nome = document.querySelector("#nome")
teste = document.querySelectorAll('input[name="inlineRadioOptions"]')
botao = document.querySelector("#botao") 
 
 botao.addEventListener("click", function(event) {
        event.preventDefault();
        
        var form = document.querySelector("#insert_form");
        
        var nome1= teste.value;
        
        var DeltaSp = document.createElement("p");
        //Definindo o pai do elemento criado.
        form.appendChild(DeltaSp);
        
        DeltaSp.textContent = nome1
        
        });*/