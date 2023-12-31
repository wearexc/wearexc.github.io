const ap = new APlayer({
    container: document.getElementById('aplayer'), //播放器容器元素
    mini: false, //迷你模式
    autoplay: true, //自动播放
    theme: '#FADFA3', //主题色
    preload: 'metadata', //预加载，可选值: 'none', 'metadata', 'auto'
    volume: 1, //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    mutex: false, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    listFolded: true, //列表默认折叠
    listMaxHeight: 90, //列表最大高度
    audio: [ //音频信息,包含以下
        {
            name: 'Shelter', //音频名称
            artist: 'Xeuphoria', //音频艺术家
            url: 'http://music.163.com/song/media/outer/url?id=1355544039.mp3', //音频外链
            cover: 'https://p2.music.126.net/DVjzMBf5iKXt8bJ8-2X09Q==/109951163963758971.jpg?param=130y130', //音频封面
            theme: '#ebd0c2' //切换到此音频时的主题色，比上面的 theme 优先级高
        }
    ]
});