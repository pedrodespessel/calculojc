






function calcular() {
    var res2 = document.getElementById('res')
    var pv2 = document.getElementById('pv').value
    var pmt2 = document.getElementById('pmt').value
    var i = 0.01
    var fv = 1000000
    pv3 = Number(pv2)
    pmt3 = Number(pmt2)

   // n = Math.log(1+i)**((-pmt3-fv)/(-pv3+(pmt3/(1+i))+(pmt3/(1+i)**2)))

    n = Math.log(1+i)**((-pmt3-fv)/(-pv3+(pmt3/(1+i))+(pmt3/(1+i)**2)))

    n2 = n.toFixed(2) // não é necessário eu acho. Coloquei pra teste, mas o resultado está dando infinity

    res2.innerHTML = n2
}