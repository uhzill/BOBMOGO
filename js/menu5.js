$(document).ready(function () {

    //이미지 미리보기
    var imgTarget = $(".preview-image .upload-hidden");
  
    imgTarget.on("change", function () {
      var parent = $(this).parent();
      parent.children(".upload-display").remove();
  
      if (window.FileReader) {
        if (!$(this)[0].files[0].type.match(/image\//)) return;
  
        var reader = new FileReader();
        reader.onload = function (e) {
          var src = e.target.result;
          parent.prepend(
            '<div class="upload-display"><div class="upload-thumb-wrap"><img src="' +
              src +
              '" class="upload-thumb"></div></div>'
          );
        };
        reader.readAsDataURL($(this)[0].files[0]);
      } else {
        $(this)[0].select();
        $(this)[0].blur();
        var imgSrc = document.selection.createRange().text;
        parent.prepend(
          '<div class="upload-display"><div class="upload-thumb-wrap"><img class="upload-thumb"></div></div>'
        );
  
        var img = $(this).siblings(".upload-display").find("img");
        img[0].style.filter =
          "progid:DXImageTransform.Microsoft.AlphaImageLoader(enable='true',sizingMethod='scale',src=\"" +
          imgSrc +
          '")';
      }
    });
  });
  