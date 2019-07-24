$(document).ready(function(){
    $('.delete').click(function(){
        let parent=$(this).parent().parent().attr('data-id');
        $.post(
            '/delete',
            {
                data_id:parent
            },
            (status)=>{
                if(status==='200')
                    location.reload(true);
            }
        );     
    });

    $('.submit').click(()=>{
        let taskInput=$('.taskInput').val();
        if(taskInput!=='undefined' && taskInput!==''){
            $.post(
                '/save',
                {
                    text:taskInput
                },
                (status)=>{
                    if(status==='200')
                        location.reload(true);    
                });
            $('.taskInput').val('');
        }
    });
});