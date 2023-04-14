function getCommetnList() {
    $.ajax({
        method: 'GET',
        url: 'http://www.liulongbin.top:3006/api/cmtlist',
        success: function(res) {
            if (res.status !== 200) return alert('获取评论列表失败！')
            let rows = []
            $.each(res.data, function(i, item) {
                rows.push('<li class="list-group-item"><span class="badge" style="background-color: #F0AD4E;">评论时间：' + item.time + '</span><span class="badge" style="background-color: #5BC0DE;">评论人：' + item.username + '</span>' + item.content + '</li>')
            })
            $('#cmt-list').empty().append(rows.join(''))
        }
    })
}

getCommetnList()

$(function() {
    $('#formAddpinglun').submit(function(e) {
        e.preventDefault()
        let data = $(this).serialize()
        $.post('http://www.liulongbin.top:3006/api/addcmt', data, function(res) {
            if (res.status !== 201) return alert('发表评论失败！')
            $('#formAddpinglun')[0].reset()
            getCommetnList()
        })
    })
})