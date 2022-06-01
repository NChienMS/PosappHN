

	
 
window.onload = function()
{
     var row = document.getElementById("row");
  var column = document.getElementById("column");
  	

		var container = document.getElementById("container");
	
		var countRow = 4;
		var countColumn = 3;
	
		var tagTable = document.createElement("table");
		tagTable.border = 1;
		
		
		var sdt = ["0383877892","0702166188","0389279041","0343549035","0969047288","0337260123","0905957287","0706232519","0359752007","0347147306","0938363986","0786212926","0352190039","0931740235","0798438116","0397891307","0932798001","0707633969","0932257922","0967730370","0366723408","0385170648","0908079865","0799101610","0969738540","0376942576","0974193230","0936035855","0965949836","0902844756","0332269530","0967018241","0904793435","0372096330","0905740796","0901246005","0342244492","0968692487","0779340312","0965411298","0969917398","0985359443","0969461886","0396963118","0819601994","0986200489"
];	
		var name = ["Huỳnh Thị Khánh Vi","Phan Nữ Gia (HN)","Mai Văn Dương (HN)","Lường Văn Tuấn(HN)","Lê Gia Quân ( HN)","Nguyễn Văn Chiến (HN)","Nguyễn Ngọc Thanh Huy (ĐN)","Huỳnh Phú Quý (ĐN)","Lê Đình Cường","Nguyễn Thị Diễm Ái","Nguyễn Viết Trung","Nguyễn Trọng Nhân","Phan Thanh Huệ","Lê Văn Hiên","Trần Trung Trực","Nguyễn Phú Trọng","Bùi Nguyên Minh Hiếu","Nguyễn Ngọc Lương Thuận","Lê Vũ Ngọc Duyên","Hoàng Đình Chiến","Bùi Văn Bạo","Trần Công Minh","Võ Tuyến Vinh","Trương Nhân Viên","Nguyễn Lê Huy","Phạm Ngọc Thạch","Phạm Thị Thúy Hồng","Nguyễn Kim Nhi","Trần Nữ Hồng Phượng","Trương Ngọc Quỳnh Như","Hạng Phước Quang","Nguyễn Thị Phương Linh","Nguyễn Thị Thu Thảo","Nguyễn Trọng Thanh","Lê Thị Ngọc Yến","Phạm Hoàng Phúc Nguyên","Nguyễn Khắc An","Phạm Duy Kiên","Phạm Thị Hải Yến (HN)","Hoàng Lê Huy (HN)","Nguyễn Mạnh Dũng (HN)","Nguyễn Trọng Hùng (HN)","Công Nghĩa Mạnh (HN)","Thái Hoàng Anh (HN)","Hoàng Thị Nhật Lệ  (HN)","Nguyễn Mai Châu  (HN)"
];

		for (var i = 0; i < name.length+1; i++) {
		      var tagRow = document.createElement("tr");
		      tagTable.appendChild(tagRow);
			if (i==0){ 

		      for(var j = 0; j < 3; j++) {

		      	var z=name;
		        var tagColumn = document.createElement("th");
		        		if (j==1) {z="HỌ VÀ TÊN";} else if(j==2) {z="SĐT";} else {z="STT"}
		        		
						var textNode = document.createTextNode(z);
						tagColumn.appendChild(textNode);
						tagRow.appendChild(tagColumn);
		      							}
		  	} else {
		  		for(var j = 0; j < 3; j++) {

		      	var z=name;
		        var tagColumn = document.createElement("td");
		        		if (j==1) {z=name[i-1];} else if(j==2) {z=sdt[i-1];} else {z=i;}

						var textNode = document.createTextNode(z);
						tagColumn.appendChild(textNode);
						tagRow.appendChild(tagColumn);
		      							}
		  	}
		}
	
		container.appendChild(tagTable);
		
	  return true;
  
};
 function verify(){if (document.querySelector('#password').value === '61030091'){document.querySelector('.sonblogloginwrap').classList.add('hidden');window.open("https://nchienms.github.io/PosappHN/ms/internal.html","_self");}

else{alert('Bạn đã nhập sai mật khẩu!');password.setSelectionRange(0,password.value.length)}

return false}

  const show = () => {

  let password = document.querySelector('#password');

  let sandi = document.querySelector('.icon1');

  if (password.type === 'password') {

    password.type = 'text';

    sandi.style.color = '#16537E';

  } else {

    password.type = 'password';

    sandi.style.color = '#fff';

  }

};


 
