          // media >=70 Aprovado
          // media >=40 && < 70 Recuperação
          // media < 40 Reprovado

          function media(){
            var n1 = parseFloat(document.getElementById("valorid1").value);
            var n2 = parseFloat(document.getElementById("valorid2").value);
            var n3 = parseFloat(document.getElementById("valorid3").value);

            var m = ((n1 + n2 + n3)/3).toFixed(2);
                

            if(m >= 7.0){
                alert("A média dos valores é: " + m + " Aluno Aprovado");

                } else if((m >=4.0) && (m < 7.0)){
                alert("A média dos valores é: " + m + " Aluno Recuperação");

                 } else if(m < 4.0){
                alert("A média dos valores é: " + m + " Aluno Reprovado");
            }
              
        }