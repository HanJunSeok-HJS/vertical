$('#evaluation').on('click', function (){

    let evaluationform = $('#evaluationform')[0];
    let evaluationformdata = new FormData(evaluationform);
    let gradeform = $('#gradeform')[0];
    let gradeformdata = new FormData(gradeform);
    var data = $('#evaluationform').serialize();
    console.table(data);
    $.ajax({
        url : '/evaluation/write',
        method : 'POST',
        data : evaluationformdata,
        contentType : false,
        processData : false,
        success : function (re){
            if (re){
                alert("작성이 완료되었습니다.");
                history.go(-1);
            } else {
                alert("작성실패");
            }
        }
    })

})

$( '#authinfo select' ).select2( {
    dir:'auto',
    theme: "bootstrap-5",
    width: $( this ).data( 'width' ) ? $( this ).data( 'width' ) : $( this ).hasClass( 'w-100' ) ? '100%' : 'style',
    placeholder: $( this ).data( 'placeholder' ),
    minimumResultsForSearch: Infinity
} );

$(document).ready(function (){
    let firm = $('#firm').val()
    $.ajax({
        url : "/review/getauth",
        success : function (result){
            if(result){
                $('#authinfo .detail .form_wrap .fieldset.verified').attr('class', 'fieldset verified')
                $('.area.end select').attr('disabled','disabled')
                $('#authinfo .detail .form_wrap .fieldset.verified #ewriter').attr('value', firm+'현직원');
                $('#reason_resign').attr('style', 'display:none')
            } else {
                $('#authinfo .detail .form_wrap .fieldset.verified').attr('class', 'fieldset')
                $('.area.start select').attr('disabled','disabled')
                $('#authinfo .detail .form_wrap .fieldset #ewriter').attr('value', firm+'전직원');
                $('#reason_resign').attr('style', 'display:block')
            }

        }
    })
})