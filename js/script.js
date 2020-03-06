// event pada saat link di klik
$('.page-scroll').on('click', function(e){
    
    // Ambil isi href
    // this itu adalah yang bersangkutan (kalau tag a, berarti tag a yang di click atau sebagainya)
    
    var tujuan = $(this).attr('href'); 
    

    // Tangkap elemen yang bersangkutan
    var elemenTujuan = $(tujuan);
// CONTOH
    // console.log(elemenTujuan); // untuk mengambil contoh section#href.href
    // console.log(elemenTujuan.offset().top); // untuk mengetahui jarak offset keatas
    // $('html').scrollTop() untuk mengetahui jarak keatas tapi sesuai posisi halaman
        // console.log($("html").scrollTop());

    // AKHIR CONTOH

    // Pindahkan scroll
    // $('html').scrollTop(elemenTujuan.offset().top); // sama saja seperti pindah href dalam halaman, hanya saja ini versi jquery

    $("html").animate({
        scrollTop: elemenTujuan.offset().top-50
    }, 750, 'easeInOutExpo');
    
    e.preventDefault();

});


// untuk menyimpan parallax
// Butuh event yang menangani scroll pada halaman
$(window).scroll(function(){ // ambil sebuah window, lalu ketika di scroll, jalankan fungsi ini 
    
    // Jumbotron
    
    var wScroll = $(this).scrollTop(); // this ini adalah window, 
    // console.log(wScroll);

    $('.jumbotron img').css({
        'transform' : 'translate(0px , '+ wScroll/4.85+'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px , '+ wScroll/2.3+'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px , '+ wScroll/1.6+'%)'
    });


    // Portfolio

    if(wScroll > $('.portfolio').offset().top - 250 ){ // jika wscroll lebih besar dari class portfolio yang offset nya dikurang 250
        $('.portfolio .thumbnail').each(function(i){
            setTimeout(function(){
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 300 * (i+1));
        });
    }
})

// about reload 
$(window).on('load', function(){
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});