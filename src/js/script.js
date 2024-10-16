//sur les sections de textes à faire apparaître
function showHidTextSubDivTreatement(currentID){
 
    //si le texte est affiché, on ne veut pas de style lors du hover
          
    if( $(currentID).find('.textToHide').css('display')!='none' ){

        $(currentID).find('.textToHide').css("display","none");
        $(currentID).find('.textToShow').css("display","flex");

        $(currentID).css({
            'font-size':'20px',
            'background-color':'black',
            'color':'white'}
        )
    }

  
}


function changeBrightMode(actualIcon){
    if (actualIcon.attr("isBright")=="false"){
        actualIcon.attr("isBright","true")
        actualIcon.attr("src","../images/sun.svg")
    }else{
        actualIcon.attr("isBright","false")
        actualIcon.attr("src","../images/moon.svg")
    }
}

$(document).ready(function(){

   

    //code pour l'entête
    $('.entete').on('click',function(){
        let sectionName =$(this).attr('href')
        showHidTextSubDivTreatement(sectionName)

    })

    $('.sub-division').on('click',function(){
        showHidTextSubDivTreatement('#'+ $(this).attr('id'))

    })
    

    $('.return-section').on('click',function(e){
        //la sub-division a déjà un onclick, le bouton cliqué, cela se propage aussi sur la box, ce n'est pas ce qu'on veut.
        e.stopPropagation()

        $('.textToShow').css('display','none'); 
        $('.textToHide').css("display","flex");
    })

    $('#iconBright').on('click',function(){
        changeBrightMode($(this));
    })
})

//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
