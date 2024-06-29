
(() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()


var app = angular.module('myApp',[]);

// check box
app.controller('checkboxController', function ($scope) {
    $scope.check = null;

    $scope.checkClick = function (event) {
        var checkbox = event.target;
        if (checkbox.checked && $scope.check !== null && $scope.check !== checkbox) {
            $scope.check.checked = false;
        }
        $scope.check = checkbox;
    };
});


app.controller('infoController', function($scope){

// cs nhap hoc 
    $scope.csNhapHoc = ["Hà Nội", "Hải Phòng", "Hà Nam", "Thanh Hóa", "Hồ Chí Minh", "Quy Nhơn", "Đà Nẵng", "Tây Nguyên", "Cần Thơ", "Thái Nguyên", "Đồng Nai"];
$scope.nguyenVong1 = [];
$scope.chuyenNganh1 = [];

$scope.nguyenVong2 = [];
$scope.chuyenNganh2 = [];

$scope.onNhapHoc = function() {
    $scope.nguyenVong1 = [];
    $scope.chuyenNganh1 = [];

    $scope.nguyenVong2 = [];
    $scope.chuyenNganh2 = [];

    if ($scope.nhapHoc === "Hà Nội") {
        $scope.nguyenVong1 = ['Phát triển phầm mềm', 'Lập trình web', 'lập trình mobile','Ứng dụng phần mềm','Xử lý dữ liệu','Lập trình game','Digital marketing','Marketing & Sale','Truyền thông & tổ chức sự kiện','Quản trị khác sạn & nhà hàng','Quản trị dịch vụ & lữ hành','Logistics','Công nghệ kỹ thuật điên, điện tử','CN kỹ thuật điều khiển & tự động hóa','Công nghệ kỹ thuật cơ khí','Thiết kế đồ họa','Dươc(dự kiến)','Chip & Bán dẫn(dự kiến)'];
    } else if ($scope.nhapHoc === "Hải Phòng") {
        $scope.nguyenVong1 = ['Phát triển phầm mềm', 'Lập trình web', 'Digital marketing','Marketing & Sale','Logistics','Thiết kế đồ họa'];
    } else if ($scope.nhapHoc === "Hà Nam") {
        $scope.nguyenVong1 = ['Phát triển phầm mềm', 'Lập trình web', 'Digital marketing','Marketing & Sale','Logistics','Thiết kế đồ họa', 'Dươc(dự kiến)'];
    } else if ($scope.nhapHoc === "Thanh Hóa") {
        $scope.nguyenVong1 = [ 'Lập trình web', 'Digital marketing','Thiết kế đồ họa'];
    } else if ($scope.nhapHoc === "Hồ Chí Minh") {
        $scope.nguyenVong1 = ['Phát triển phầm mềm', 'Lập trình web', 'lập trình mobile','Ứng dụng phần mềm','Xử lý dữ liệu','Lập trình game','Digital marketing','Marketing & Sale','Truyền thông & tổ chức sự kiện','Quản trị khác sạn & nhà hàng','Quản trị dịch vụ & lữ hành','Logistics','Công nghệ kỹ thuật điên, điện tử','CN kỹ thuật điều khiển & tự động hóa','Công nghệ kỹ thuật cơ khí','Thiết kế đồ họa','Dươc(dự kiến)','Chip & Bán dẫn(dự kiến)'];
    } else if ($scope.nhapHoc === "Quy Nhơn") {
        $scope.nguyenVong1 = ['Phát triển phầm mềm', 'Digital marketing', 'Quản trị khác sạn & nhà hàng','Thiết kế đồ họa'];
    } else if ($scope.nhapHoc === "Đà Nẵng") {
        $scope.nguyenVong1 = ['Phát triển phầm mềm', 'Lập trình web', 'lập trình mobile','Ứng dụng phần mềm','Xử lý dữ liệu','Lập trình game','Digital marketing','Marketing & Sale','Truyền thông & tổ chức sự kiện','Quản trị khác sạn & nhà hàng','Quản trị dịch vụ & lữ hành','Logistics','Công nghệ kỹ thuật điên, điện tử','CN kỹ thuật điều khiển & tự động hóa','Công nghệ kỹ thuật cơ khí','Thiết kế đồ họa','Dươc(dự kiến)','Chip & Bán dẫn(dự kiến)'];
    } else if ($scope.nhapHoc === "Tây Nguyên") {
        $scope.nguyenVong1 = ['Phát triển phầm mềm', 'Lập trình web', 'Digital marketing','Marketing & Sale','Logistics','Thiết kế đồ họa'];
    } else if ($scope.nhapHoc === "Cần Thơ") {
        $scope.nguyenVong1 = ['Phát triển phầm mềm', 'Lập trình web', 'lập trình mobile','Ứng dụng phần mềm','Xử lý dữ liệu','Lập trình game','Digital marketing','Marketing & Sale','Truyền thông & tổ chức sự kiện','Quản trị khác sạn & nhà hàng','Quản trị dịch vụ & lữ hành','Logistics','Công nghệ kỹ thuật điên, điện tử','CN kỹ thuật điều khiển & tự động hóa','Công nghệ kỹ thuật cơ khí','Thiết kế đồ họa','Dươc(dự kiến)','Chip & Bán dẫn(dự kiến)'];
    } else if ($scope.nhapHoc === "Thái Nguyên") {
        $scope.nguyenVong1 = ['Phát triển phầm mềm', 'Lập trình web', 'Digital marketing','Marketing & Sale','Logistics','Thiết kế đồ họa'];
    } else if ($scope.nhapHoc === "Đồng Nai") {
        $scope.nguyenVong1 = ['Phát triển phầm mềm', 'Lập trình web', 'Digital marketing','Marketing & Sale','Logistics','Thiết kế đồ họa'];
    } 


    if ($scope.nhapHoc === "Hà Nội") {
        $scope.nguyenVong2 = ['Phát triển phầm mềm', 'Lập trình web', 'lập trình mobile','Ứng dụng phần mềm','Xử lý dữ liệu','Lập trình game','Digital marketing','Marketing & Sale','Truyền thông & tổ chức sự kiện','Quản trị khác sạn & nhà hàng','Quản trị dịch vụ & lữ hành','Logistics','Công nghệ kỹ thuật điên, điện tử','CN kỹ thuật điều khiển & tự động hóa','Công nghệ kỹ thuật cơ khí','Thiết kế đồ họa','Dươc(dự kiến)','Chip & Bán dẫn(dự kiến)'];
    } else if ($scope.nhapHoc === "Hải Phòng") {
        $scope.nguyenVong2 = ['Phát triển phầm mềm', 'Lập trình web', 'Digital marketing','Marketing & Sale','Logistics','Thiết kế đồ họa'];
    } else if ($scope.nhapHoc === "Hà Nam") {
        $scope.nguyenVong2 = ['Phát triển phầm mềm', 'Lập trình web', 'Digital marketing','Marketing & Sale','Logistics','Thiết kế đồ họa', 'Dươc(dự kiến)'];
    } else if ($scope.nhapHoc === "Thanh Hóa") {
        $scope.nguyenVong2 = [ 'Lập trình web', 'Digital marketing','Thiết kế đồ họa'];
    } else if ($scope.nhapHoc === "Hồ Chí Minh") {
        $scope.nguyenVong2 = ['Phát triển phầm mềm', 'Lập trình web', 'lập trình mobile','Ứng dụng phần mềm','Xử lý dữ liệu','Lập trình game','Digital marketing','Marketing & Sale','Truyền thông & tổ chức sự kiện','Quản trị khác sạn & nhà hàng','Quản trị dịch vụ & lữ hành','Logistics','Công nghệ kỹ thuật điên, điện tử','CN kỹ thuật điều khiển & tự động hóa','Công nghệ kỹ thuật cơ khí','Thiết kế đồ họa','Dươc(dự kiến)','Chip & Bán dẫn(dự kiến)'];
    } else if ($scope.nhapHoc === "Quy Nhơn") {
        $scope.nguyenVong2 = ['Phát triển phầm mềm', 'Digital marketing', 'Quản trị khác sạn & nhà hàng','Thiết kế đồ họa'];
    } else if ($scope.nhapHoc === "Đà Nẵng") {
        $scope.nguyenVong2 = ['Phát triển phầm mềm', 'Lập trình web', 'lập trình mobile','Ứng dụng phần mềm','Xử lý dữ liệu','Lập trình game','Digital marketing','Marketing & Sale','Truyền thông & tổ chức sự kiện','Quản trị khác sạn & nhà hàng','Quản trị dịch vụ & lữ hành','Logistics','Công nghệ kỹ thuật điên, điện tử','CN kỹ thuật điều khiển & tự động hóa','Công nghệ kỹ thuật cơ khí','Thiết kế đồ họa','Dươc(dự kiến)','Chip & Bán dẫn(dự kiến)'];
    } else if ($scope.nhapHoc === "Tây Nguyên") {
        $scope.nguyenVong2 = ['Phát triển phầm mềm', 'Lập trình web', 'Digital marketing','Marketing & Sale','Logistics','Thiết kế đồ họa'];
    } else if ($scope.nhapHoc === "Cần Thơ") {
        $scope.nguyenVong2 = ['Phát triển phầm mềm', 'Lập trình web', 'lập trình mobile','Ứng dụng phần mềm','Xử lý dữ liệu','Lập trình game','Digital marketing','Marketing & Sale','Truyền thông & tổ chức sự kiện','Quản trị khác sạn & nhà hàng','Quản trị dịch vụ & lữ hành','Logistics','Công nghệ kỹ thuật điên, điện tử','CN kỹ thuật điều khiển & tự động hóa','Công nghệ kỹ thuật cơ khí','Thiết kế đồ họa','Dươc(dự kiến)','Chip & Bán dẫn(dự kiến)'];
    } else if ($scope.nhapHoc === "Thái Nguyên") {
        $scope.nguyenVong2 = ['Phát triển phầm mềm', 'Lập trình web', 'Digital marketing','Marketing & Sale','Logistics','Thiết kế đồ họa'];
    } else if ($scope.nhapHoc === "Đồng Nai") {
        $scope.nguyenVong2 = ['Phát triển phầm mềm', 'Lập trình web', 'Digital marketing','Marketing & Sale','Logistics','Thiết kế đồ họa'];
    } 
};

// nguyện vọng 1 
$scope.onNguyenVong = function() {
    $scope.chuyenNganh1 = [];

    if ($scope.nguyenVong === "Phát triển phầm mềm" || $scope.nguyenVong === "Lập trình web" || $scope.nguyenVong === "lập trình mobile" || $scope.nguyenVong === "Ứng dụng phần mềm" || $scope.nguyenVong === "Ứng dụng phần mềm" || $scope.nguyenVong === "Xử lý dữ liệu" || $scope.nguyenVong === "Lập trình game") {
        $scope.chuyenNganh1.push("Công nghệ thông tin");
    } else if ($scope.nguyenVong === "Digital marketing" || $scope.nguyenVong === "Marketing & Sale" || $scope.nguyenVong === "Truyền thông & tổ chức sự kiện" || $scope.nguyenVong === "Quản trị khác sạn & nhà hàng" || $scope.nguyenVong === "Quản trị dịch vụ & lữ hành" || $scope.nguyenVong === "Logistics") {
        $scope.chuyenNganh1.push("Quản trị kinh doanh");
    } else if ($scope.nguyenVong === "Công nghệ kỹ thuật điên, điện tử" || $scope.nguyenVong === "CN kỹ thuật điều khiển & tự động hóa" ) {
        $scope.chuyenNganh1.push("CN kỹ thuật điều khiển & tự động hóa");
    } else if($scope.nguyenVong === "Công nghệ kỹ thuật cơ khí" || $scope.nguyenVong === "Thiết kế đồ họa" || $scope.nguyenVong === "Dươc(dự kiến)" || $scope.nguyenVong === "Chip & Bán dẫn(dự kiến)") {
        $scope.chuyenNganh1.push("Ngành khác");
    }
console.log($scope.chuyenNganh1[0]);
};

// nguyện vọng 2 
$scope.onNV = function() {
    $scope.chuyenNganh2 = [];

    if ($scope.NV === "Phát triển phầm mềm" || $scope.NV === "Lập trình web" || $scope.NV === "lập trình mobile" || $scope.NV === "Ứng dụng phần mềm" || $scope.NV === "Ứng dụng phần mềm" || $scope.NV === "Xử lý dữ liệu" || $scope.NV === "Lập trình game") {
        $scope.chuyenNganh2.push("Công nghệ thông tin");
    } else if ($scope.NV === "Digital marketing" || $scope.NV === "Marketing & Sale" || $scope.NV === "Truyền thông & tổ chức sự kiện" || $scope.NV === "Quản trị khác sạn & nhà hàng" || $scope.NV === "Quản trị dịch vụ & lữ hành" || $scope.NV === "Logistics") {
        $scope.chuyenNganh2.push("Quản trị kinh doanh");
    } else if ($scope.NV === "Công nghệ kỹ thuật điên, điện tử" || $scope.NV === "CN kỹ thuật điều khiển & tự động hóa" ) {
        $scope.chuyenNganh2.push("CN kỹ thuật điều khiển & tự động hóa");
    } else if($scope.NV === "Công nghệ kỹ thuật cơ khí" || $scope.NV === "Thiết kế đồ họa" || $scope.NV === "Dươc(dự kiến)" || $scope.NV === "Chip & Bán dẫn(dự kiến)") {
        $scope.chuyenNganh2.push("Ngành khác");
    }

};


//     $scope.onDistrict = function() {
//         $scope.communes = []

// // thành phố hcm 
//         if($scope.district === "Quận 1") {
//             $scope.communes = ["Phường Bến Nghé","Phường Bến Thành","Phường Cầu Kho","Phường Cầu Ông Lãnh","Phường Cô Giang","Phường Đa Kao","Phường Nguyễn Cư Trinh","Phường Nguyễn Thái Bình","Phường Phạm Ngũ Lão","Phường Tân Định"];
//         }

    $scope.provinces = ['Thành Phố Hà Nội', 'Thành Phố Hồ Chí Minh', 'Thành Phố Hải Phòng', 'Thành Phố Đà Nẵng', 'tỉnh Cần Thơ', 'tỉnh An Giang', 'tỉnh Bà Rịa - Vũng Tàu',
    'tỉnh Bắc Giang', 'tỉnh Bắc Kạn', 'tỉnh Bạc Liêu', 'tỉnh Bắc Ninh', 'tỉnh Bến Tre', 'tỉnh Bình Định', 'tỉnh Bình Dương',
    'tỉnh Bình Phước', 'tỉnh Bình Thuận', 'tỉnh Cà Mau', 'tỉnh Cao Bằng', 'tỉnh Đắk Lắk', 'tỉnh Đắk Nông', 'tỉnh Điện Biên',
    'tỉnh Đồng Nai', 'tỉnh Đồng Tháp', 'tỉnh Gia Lai', 'tỉnh Hà Giang', 'tỉnh Hà Nam', 'tỉnh Hà Tĩnh', 'tỉnh Hải Dương', 'tỉnh Hậu Giang',
    'tỉnh Hòa Bình', 'tỉnh Hưng Yên', 'tỉnh Khánh Hòa', 'tỉnh Kiên Giang', 'tỉnh Kon Tum', 'tỉnh Lai Châu', 'tỉnh Lâm Đồng',
    'tỉnh Lạng Sơn', 'tỉnh Lào Cai', 'tỉnh Long An', 'tỉnh Nam Định', 'tỉnh Nghệ An', 'tỉnh Ninh Bình', 'tỉnh Ninh Thuận', 'tỉnh Phú Thọ',
    'tỉnh Quảng Bình', 'tỉnh Quảng Nam', 'tỉnh Quảng Ngãi', 'tỉnh Quảng Ninh', 'tỉnh Quảng Trị', 'tỉnh Sóc Trăng', 'tỉnh Sơn La',
    'tỉnh Tây Ninh', 'tỉnh Thái Bình', 'tỉnh Thái Nguyên', 'tỉnh Thanh Hóa', 'tỉnh Thừa Thiên Huế', 'tỉnh Tiền Giang',
    'tỉnh Trà Vinh', 'tỉnh Tuyên Quang', 'tỉnh Vĩnh Long', 'tỉnh Vĩnh Phúc', 'tỉnh Yên Bái'];
    $scope.districts = [];
    $scope.communes = [];

    $scope.onProvinces = function(){
        $scope.districts = [];

        if($scope.province === 'Thành Phố Hà Nội') {
            $scope.districts = ["Quận Ba Đình", "Quận Hoàn Kiếm", "Quận Tây Hồ", "Quận Long Biên", "Quận Cầu Giấy", 
            "Quận Đống Đa", "Quận Hai Bà Trưng", "Quận Hoàng Mai", "Quận Thanh Xuân", "Huyện Sóc Sơn", "Huyện Đông Anh", 
            "Huyện Gia Lâm", "Quận Nam Từ Liêm", "Huyện Thanh Trì", "Quận Bắc Từ Liêm", "Huyện Mê Linh", "Quận Hà Đông",
            "Thị Xã Sơn Tây", "Huyện Ba Vì", "Huyện Phúc Thọ", "Huyện Đan Phượng", "Huyện Hoài Đức", "Huyện Quốc Oai", 
            "Huyện Thạch Thất", "Huyện Chương Mỹ", "Huyện Thanh Oai", "Huyện Thường Tín", "Huyện Phú Xuyên", "Huyện Ứng Hòa", 
            "Huyện Mỹ Đức"];
        } else if($scope.province === 'Thành Phố Hồ Chí Minh') {
            $scope.districts = ["Quận 1", "Quận 2","Quận 3","Quận 4","Quận 5","Quận 6","Quận 7","Quận 8","Quận 9","Quận 10","Quận 11","Quận 12","Quận Bình Tân","Quận Bình Thạnh","Quận Gò Vấp","Quận Phú Nhuận","Quận Tân Bình","Quận Tân Phú","Quận Thủ Đức","Huyện Bình Chánh","Huyện Cần Giờ","Huyện Củ Chi","Huyện Hóc Môn","Huyện Nhà Bè"];
        } else if($scope.province === 'Thành Phố Hải Phòng') {
            $scope.districts = ["Huyện An Dương", "Huyện An Lão", "Huyện Bạch Long Vĩ", "Huyện Cát Hải", "Huyện Kiến Thuỵ", "Huyện Thủy Nguyên", "Huyện Tiên Lãng", "Huyện Vĩnh Bảo"];
        } else if($scope.province === 'Thành Phố Đà Nẵng') {
            $scope.districts = ["Quận Hải Châu", "Quận Thanh Khê", "Quận Sơn Trà", "Quận Ngũ Hành Sơn", "Huyện Cẩm Lệ", "Huyện Liên Chiểu", "Huyện Hòa Vang"];
        } else if($scope.province === 'tỉnh Cần Thơ') {
            $scope.districts = ["Huyện Cờ Đỏ", "Huyện Phong Điền", "Huyện Thới Lai", "Huyện Vĩnh Thạnh", "Huyện Cái Răng", "Huyện Thốt Nốt", "Huyện Ô Môn"];
        }else if($scope.province === 'tỉnh An Giang') {
            $scope.districts =["Huyện An Phú", "Huyện Châu Phú", "Huyện Châu Thành", "Huyện Chợ Mới", "Huyện Phú Tân", "Huyện Thoại Sơn", "Huyện Tịnh Biên", "Huyện Tri Tôn"];
        }else if($scope.province === 'tỉnh Bà Rịa - Vũng Tàu') {
            $scope.districts = ["Huyện Châu Đức", "Huyện Côn Đảo", "Huyện Đất Đỏ", "Huyện Long Điền", "Huyện Tân Thành", "Huyện Xuyên Mộc"];
        }else if($scope.province === 'tỉnh Bắc Giang') {
            $scope.districts =["Huyện Lục Ngạn", "Huyện Sơn Động", "Huyện Lục Nam", "Huyện Tân Yên", "Huyện Yên Dũng", "Huyện Hiệp Hòa", "Huyện Lạng Giang", "Huyện Việt Yên", "Huyện Yên Thế"];
        }else if($scope.province === 'tỉnh Bắc Kạn') {
            $scope.districts = ["Huyện Ba Bể", "Huyện Bạch Thông", "Huyện Chợ Đồn", "Huyện Chợ Mới", "Huyện Na Rì", "Huyện Ngân Sơn", "Huyện Pác Nặm"];
        }else if($scope.province === 'tỉnh Bạc Liêu') {
            $scope.districts = ["Huyện Đông Hải", "Huyện Giá Rai", "Huyện Hoà Bình", "Huyện Hồng Dân", "Huyện Phước Long", "Huyện Vĩnh Lợi", "Huyện Đông Hải 1"];
        }else if($scope.province === 'tỉnh Bến Tre') {
            $scope.districts = ["Huyện Ba Tri", "Huyện Bình Đại", "Huyện Châu Thành", "Huyện Chợ Lách", "Huyện Giồng Trôm", "Huyện Mỏ Cày Bắc", "Huyện Mỏ Cày Nam", "Huyện Thạnh Phú", "Huyện Bến Tre"];
        }else if($scope.province === 'tỉnh Bắc Ninh') {
            $scope.districts = ["Huyện Gia Bình", "Huyện Lương Tài", "Huyện Quế Võ", "Huyện Thuận Thành", "Huyện Tiên Du", "Huyện Yên Phong", "Huyện Bắc Ninh"];
        }else if($scope.province === 'tỉnh Bình Định') {
            $scope.districts = ["Huyện An Lão", "Huyện An Nhơn", "Huyện Hoài Ân", "Huyện Hoài Nhơn", "Huyện Phù Cát", "Huyện Phù Mỹ", "Huyện Tây Sơn", "Huyện Tuy Phước", "Huyện Vân Canh", "Huyện Vĩnh Thạnh"];
        }else if($scope.province === 'tỉnh Bình Dương') {
            $scope.districts = ["Huyện Bàu Bàng", "Huyện Bắc Tân Uyên", "Huyện Bến Cát", "Huyện Dầu Tiếng", "Huyện Phú Giáo", "Huyện Tân Uyên", "Huyện Thuận An", "Huyện Dĩ An"];
        }else if($scope.province === 'tỉnh Bình Phước') {
            $scope.districts =["Huyện Bù Đăng", "Huyện Bù Đốp", "Huyện Bù Gia Mập", "Huyện Chơn Thành", "Huyện Đồng Phú", "Huyện Hớn Quản", "Huyện Lộc Ninh", "Huyện Phú Riềng"];
        }else if($scope.province === 'tỉnh Bình Thuận') {
            $scope.districts = ["Huyện Bắc Bình", "Huyện Đức Linh", "Huyện Hàm Tân", "Huyện Hàm Thuận Bắc", "Huyện Hàm Thuận Nam", "Huyện Phú Quí", "Huyện Tánh Linh", "Huyện Tuy Phong"];
        }else if($scope.province === 'tỉnh Cà Mau') {
            $scope.districts =["Huyện Cái Nước", "Huyện Đầm Dơi", "Huyện Năm Căn", "Huyện Ngọc Hiển", "Huyện Phú Tân", "Huyện Thới Bình", "Huyện Trần Văn Thời", "Huyện U Minh"];
        }else if($scope.province === 'tỉnh Cao Bằng') {
            $scope.districts =["Huyện Bảo Lạc", "Huyện Bảo Lâm", "Huyện Hạ Lang", "Huyện Hà Quảng", "Huyện Hòa An", "Huyện Nguyên Bình", "Huyện Phục Hoà", "Huyện Quảng Uyên"];
        }else if($scope.province === 'tỉnh Đắk Lắk') {
            $scope.districts =["Huyện Buôn Đôn", "Huyện Cư Kuin", "Huyện Cư M'gar", "Huyện Ea H'leo", "Huyện Ea Kar", "Huyện Ea Súp", "Huyện Krông Ana", "Huyện Krông Bông"];
        }else if($scope.province === 'tỉnh Đắk Nông') {
            $scope.districts =["Huyện Cư Jút", "Huyện Đắk Glong", "Huyện Đắk Mil", "Huyện Đắk R'Lấp", "Huyện Đắk Song", "Huyện Krông Nô", "Huyện Tuy Đức"];
        }else if($scope.province === 'tỉnh Điện Biên') {
            $scope.districts =["Huyện Điện Biên", "Huyện Điện Biên Đông", "Huyện Mường Ảng", "Huyện Mường Chà", "Huyện Mường Nhé", "Huyện Nậm Pồ", "Huyện Tủa Chùa", "Huyện Tuần Giáo"];
        }else if($scope.province === 'tỉnh Đồng Nai') {
            $scope.districts =["Huyện Cẩm Mỹ", "Huyện Định Quán", "Huyện Long Thành", "Huyện Nhơn Trạch", "Huyện TânPhú", "Huyện Thống Nhất", "Huyện Trảng Bom", "Huyện Vĩnh Cửu", "Huyện Xuân Lộc"];
        }else if($scope.province === 'tỉnh Đồng Tháp') {
            $scope.districts = ["Huyện Cao Lãnh", "Huyện Châu Thành", "Huyện Hồng Ngự", "Huyện Lai Vung", "Huyện Lấp Vò", "Huyện Tam Nông", "Huyện Tân Hồng", "Huyện Thanh Bình", "Huyện Tháp Mười"];
        }else if($scope.province === 'tỉnh Gia Lai') {
            $scope.districts =["Huyện Chư Păh", "Huyện Chư Pưh", "Huyện Chư Sê", "Huyện Chưprông", "Huyện Đăk Đoa", "Huyện Đăk Pơ", "Huyện Đức Cơ", "Huyện Ia Grai", "Huyện Ia Pa", "Huyện Kông Chro", "Huyện Krông Pa", "Huyện Mang Yang", "Huyện Phú Thiện", "Huyện Pleiku", "Huyện Đức Cơ"];
        }else if($scope.province === 'tỉnh Hà Giang') {
            $scope.districts =["Huyện Bắc Mê", "Huyện Bắc Quang", "Huyện Đồng Văn", "Huyện Hoàng Su Phì", "Huyện Mèo Vạc", "Huyện Quản Bạ", "Huyện Quang Bình", "Huyện Vị Xuyên", "Huyện Xín Mần", "Huyện Yên Minh"];
        }else if($scope.province === 'tỉnh Hà Nam') {
            $scope.districts =["Huyện Bình Lục", "Huyện Duy Tiên", "Huyện Kim Bảng", "Huyện Lý Nhân", "Huyện Thanh Liêm"];
        }else if($scope.province === 'tỉnh Hà Tĩnh') {
            $scope.districts =["Huyện Cẩm Xuyên", "Huyện Can Lộc", "Huyện Đức Thọ", "Huyện Hương Khê", "Huyện Hương Sơn", "Huyện Kỳ Anh", "Huyện Lộc Hà", "Huyện Nghi Xuân", "Huyện Thạch Hà", "Huyện Vũ Quang"];
        }else if($scope.province === 'tỉnh Hải Dương') {
            $scope.districts =["Huyện Bình Giang", "Huyện Cẩm Giàng", "Huyện Gia Lộc", "Huyện Kim Thành", "Huyện Kinh Môn", "Huyện Nam Sách", "Huyện Ninh Giang", "Huyện Thanh Hà", "Huyện Thanh Miện", "Huyện Tứ Kỳ"];
        }else if($scope.province === 'tỉnh Hậu Giang') {
            $scope.districts =["Huyện Châu Thành", "Huyện Châu Thành A", "Huyện Long Mỹ", "Huyện Phụng Hiệp", "Huyện Vị Thủy", "Huyện Vị Thuỷ"];
        }else if($scope.province === 'tỉnh Hòa Bình') {
            $scope.districts =["Huyện Cao Phong", "Huyện Đà Bắc", "Huyện Kim Bôi", "Huyện Kỳ Sơn", "Huyện Lạc Sơn", "Huyện Lạc Thủy", "Huyện Lương Sơn", "Huyện Mai Châu", "Huyện Tân Lạc", "Huyện Yên Thủy"];
        }else if($scope.province === 'tỉnh Hưng Yên') {
            $scope.districts =["Huyện Ân Thi", "Huyện Khoái Châu", "Huyện Kim Động", "Huyện Mỹ Hào", "Huyện Phù Cừ", "Huyện Tiên Lữ", "Huyện Văn Giang", "Huyện Văn Lâm", "Huyện Yên Mỹ"];
        }else if($scope.province === 'tỉnh Khánh Hòa') {
            $scope.districts =["Huyện Cam Lâm", "Huyện Diên Khánh", "Huyện Khánh Sơn", "Huyện Trường Sa", "Huyện Vạn Ninh", "Huyện Ninh Hòa"];
        }else if($scope.province === 'tỉnh Kiên Giang') {
            $scope.districts = ["Huyện An Biên", "Huyện An Minh", "Huyện Châu Thành", "Huyện Giang Thành", "Huyện Giồng Riềng", "Huyện Gò Quao", "Huyện Hòn Đất", "Huyện Kiên Hải", "Huyện Kiên Lương", "Huyện Phú Quốc", "Huyện Kiên Tường", "Huyện Tân Hiệp", "Huyện U Minh Thượng", "Huyện Vĩnh Thuận"];
        }else if($scope.province === 'ỉnh Kon Tum') {
            $scope.districts =["Huyện Đắk Glei", "Huyện Đắk Hà", "Huyện Đắk Tô", "Huyện Kon Plông", "Huyện Kon Rẫy", "Huyện Ngọc Hồi", "Huyện Sa Thầy", "Huyện Tu Mơ Rông"];
        }else if($scope.province === 'tỉnh Lai Châu') {
            $scope.districts =["Huyện Mường Tè", "Huyện Tam Đường", "Huyện Phong Thổ", "Huyện Sìn Hồ", "Huyện Than Uyên", "Huyện Tân Uyên", "Huyện Nậm Nhùn"];
        }else if($scope.province === 'tỉnh Lâm Đồng') {
            $scope.districts =["Huyện Bảo Lâm", "Huyện Cát Tiên", "Huyện Đạ Huoai", "Huyện Đạ Tẻh", "Huyện Đam Rông", "Huyện Di Linh", "Huyện Đơn Dương", "Huyện Đức Trọng", "Huyện Lạc Dương", "Huyện Lâm Hà"];
        }else if($scope.province === 'tỉnh Lạng Sơn') {
            $scope.districts =["Huyện Bắc Sơn", "Huyện Bình Gia", "Huyện Cao Lộc", "Huyện Chi Lăng", "Huyện Đình Lập", "Huyện Hữu Lũng", "Huyện Lộc Bình", "Huyện Tràng Định", "Huyện Văn Lãng", "Huyện Văn Quan"];
        }else if($scope.province === 'tỉnh Lào Cai') {
            $scope.districts =["Huyện Bảo Thắng", "Huyện Bảo Yên", "Huyện Bát Xát", "Huyện Mường Khương", "Huyện Sa Pa", "Huyện Si Ma Cai", "Huyện Văn Bàn"];
        }else if($scope.province === 'tỉnh Long An') {
            $scope.districts =["Huyện Bến Lức", "Huyện Cần Đước", "Huyện Cần Giuộc", "Huyện Châu Thành", "Huyện Đức Hòa", "Huyện Đức Huệ", "Huyện Mộc Hóa", "Huyện Tân Hưng", "Huyện Tân Thạnh", "Huyện Tân Trụ", "Huyện Thạnh Hóa", "Huyện Thủ Thừa", "Huyện Vĩnh Hưng"];
        }else if($scope.province === 'tỉnh Nam Định') {
            $scope.districts =["Huyện Giao Thủy", "Huyện Hải Hậu", "Huyện Mỹ Lộc", "Huyện Nam Trực", "Huyện Nghĩa Hưng", "Huyện Trực Ninh", "Huyện Vụ Bản", "Huyện Xuân Trường", "Huyện ý Yên"];
        }else if($scope.province === 'tỉnh Nghệ An') {
            $scope.districts =["Huyện Anh Sơn", "Huyện Con Cuông", "Huyện Diễn Châu", "Huyện Đô Lương", "Huyện Hưng Nguyên", "Huyện Kỳ Sơn", "Huyện Nam Đàn", "Huyện Nghi Lộc", "Huyện Nghĩa Đàn", "Huyện Quế Phong", "Huyện Quỳ Châu", "Huyện Quỳ Hợp", "Huyện Quỳnh Lưu", "Huyện Tân Kỳ", "Huyện Thanh Chương", "Huyện Thanh Hóa", "Huyện Tương Dương", "Huyện Yên Thành"];
        }else if($scope.province === 'tỉnh Ninh Bình') {
            $scope.districts =["Huyện Gia Viễn", "Huyện Hoa Lư", "Huyện Kim Sơn", "Huyện Nho Quan", "Huyện Yên Khánh", "Huyện Yên Mô", "Quận Ninh Bình", "Thành phố Tam Điệp"];
        }else if($scope.province === 'tỉnh Ninh Thuận') {
            $scope.districts =["Huyện Bác Ái", "Huyện Ninh Hải", "Huyện Ninh Phước", "Huyện Ninh Sơn", "Huyện Thuận Bắc", "Huyện Thuận Nam", "Thành phố Phan Rang-Tháp Chàm"];
        }else if($scope.province === 'tỉnh Phú Thọ') {
            $scope.districts = ["Huyện Cẩm Khê", "Huyện Đoan Hùng", "Huyện Hạ Hoà", "Huyện Lâm Thao", "Huyện Phù Ninh", "Huyện Tam Nông", "Huyện Tân Sơn", "Huyện Thanh Ba", "Huyện Thanh Sơn", "Huyện Thanh Thủy", "Huyện Yên Lập", "Thành phố Việt Trì", "Thị xã Phú Thọ"];
        }else if($scope.province === 'tỉnh Quảng Bình') {
            $scope.districts = ["Huyện Bố Trạch", "Huyện Lệ Thủy", "Huyện Minh Hóa", "Huyện Quảng Ninh", "Huyện Quảng Trạch", "Huyện Tuyên Hóa", "Thành phố Đồng Hới"];
        }else if($scope.province === 'tỉnh Quảng Nam') {
            $scope.districts =["Huyện Bắc Trà My", "Huyện Đại Lộc", "Huyện Điện Bàn", "Huyện Đông Giang", "Huyện Duy Xuyên", "Huyện Hiệp Đức", "Huyện Nam Giang", "Huyện Nam Trà My", "Huyện Nông Sơn", "Huyện Núi Thành", "Huyện Phú Ninh", "Huyện Phước Sơn", "Huyện Quế Sơn", "Huyện Tam Kỳ", "Huyện Tây Giang", "Huyện Thăng Bình", "Huyện Tiên Phước"];
        }else if($scope.province === 'tỉnh Quảng Ngãi') {
            $scope.districts = ["Huyện Ba Tơ", "Huyện Bình Sơn", "Huyện Đức Phổ", "Huyện Lý Sơn", "Huyện Minh Long", "Huyện Mộ Đức", "Huyện Nghĩa Hành", "Huyện Sơn Hà", "Huyện Sơn Tây", "Huyện Sơn Tịnh", "Huyện Tây Trà", "Huyện Trà Bồng", "Huyện Tư Nghĩa", "Thành phố Quảng Ngãi"];
        }else if($scope.province === 'tỉnh Quảng Ninh') {
            $scope.districts =["Huyện Ba Chẽ", "Huyện Bình Liêu", "Huyện Cô Tô", "Huyện Đầm Hà", "Huyện Hải Hà", "Huyện Hoành Bồ", "Huyện Tiên Yên", "Huyện Vân Đồn", "Thành phố Cẩm Phả", "Thành phố Hạ Long", "Thành phố Móng Cái", "Thành phố Uông Bí", "Thị xã Đông Triều", "Thị xã Quảng Yên"];
        }else if($scope.province === 'tỉnh Quảng Trị') {
            $scope.districts = ["Huyện Cam Lộ", "Huyện Cồn Cỏ", "Huyện Đa Krông", "Huyện Gio Linh", "Huyện Hải Lăng", "Huyện Hướng Hóa", "Huyện Triệu Phong", "Huyện Vĩnh Linh", "Thành phố Đông Hà", "Thị xã Quảng Trị"];
        }else if($scope.province === 'tỉnh Sóc Trăng') {
            $scope.districts = ["Huyện Châu Thành", "Huyện Cù Lao Dung", "Huyện Kế Sách", "Huyện Long Phú", "Huyện Mỹ Tú", "Huyện Mỹ Xuyên", "Huyện Ngã Năm", "Huyện Thạnh Trị", "Huyện Trần Đề", "Huyện Vĩnh Châu", "Huyện Đại Ngãi", "Thành phố Sóc Trăng"];
        }else if($scope.province === 'tỉnh Sơn La') {
            $scope.districts = ["Huyện Bắc Yên", "Huyện Mộc Châu", "Huyện Mường La", "Huyện Phù Yên", "Huyện Quỳnh Nhai", "Huyện Sông Mã", "Huyện Sốp Cộp", "Huyện Thuận Châu", "Huyện Vân Hồ", "Huyện Yên Châu", "Thành phố Sơn La"];
        }else if($scope.province === 'tỉnh Tây Ninh') {
            $scope.districts = ["Huyện Bến Cầu", "Huyện Châu Thành", "Huyện Dương Minh Châu", "Huyện Gò Dầu", "Huyện Hòa Thành", "Huyện Tân Biên", "Huyện Tân Châu", "Huyện Trảng Bàng", "Thị xã Tây Ninh"];
        }else if($scope.province === 'tỉnh Thái Bình') {
            $scope.districts =["Huyện Đông Hưng", "Huyện Hưng Hà", "Huyện Kiến Xương", "Huyện Quỳnh Phụ", "Huyện Thái Thụy", "Huyện Tiền Hải", "Huyện Vũ Thư", "Thành phố Thái Bình"];
        }else if($scope.province === 'tỉnh Thái Nguyên') {
            $scope.districts =["Huyện Đại Từ", "Huyện Định Hóa", "Huyện Đồng Hỷ", "Huyện Phổ Yên", "Huyện Phú Bình", "Huyện Phú Lương", "Huyện Sông Công", "Huyện Võ Nhai", "Thành phố Thái Nguyên"];
        }else if($scope.province === 'tỉnh Thanh Hóa') {
            $scope.districts = ["Huyện Bá Thước", "Huyện Cẩm Thủy", "Huyện Đông Sơn", "Huyện Hà Trung", "Huyện Hậu Lộc", "Huyện Hoằng Hóa", "Huyện Lang Chánh", "Huyện Mường Lát", "Huyện Nga Sơn", "Huyện Ngọc Lặc", "Huyện Như Thanh", "Huyện Như Xuân", "Huyện Nông Cống", "Huyện Quan Hóa", "Huyện Quan Sơn", "Huyện Quảng Xương", "Huyện Thạch Thành", "Huyện Thiệu Hoá", "Huyện Thường Xuân", "Huyện Triệu Sơn", "Huyện Vĩnh Lộc", "Huyện Yên Định", "Thành phố Thanh Hóa", "Thị xã Bỉm Sơn", "Thị xã Sầm Sơn"];
        }else if($scope.province === 'tỉnh Thừa Thiên Huế') {
            $scope.districts = ["Huyện A Lưới", "Huyện Hương Thủy", "Huyện Hương Trà", "Huyện Nam Đông", "Huyện Phong Điền", "Huyện Phú Lộc", "Huyện Phú Vang", "Thành phố Huế"];
        }else if($scope.province === 'tỉnh Tiền Giang') {
            $scope.districts =["Huyện Cai Lậy", "Huyện Cái Bè", "Huyện Châu Thành", "Huyện Chợ Gạo", "Huyện Gò Công Đông", "Huyện Gò Công Tây", "Huyện Tân Phú Đông", "Huyện Tân Phước", "Thành phố Mỹ Tho", "Thị xã Gò Công"];
        }else if($scope.district === 'Tỉnh Trà Vinh'){
            $scope.communes = ["Huyện Càng Long", "Huyện Cầu Kè", "Huyện Cầu Ngang", "Huyện Châu Thành", "Huyện Duyên Hải", "Huyện Tiểu Cần", "Huyện Trà Cú", "Thành phố Trà Vinh"];
        }
        else if($scope.province === 'tỉnh Tuyên Quang') {
            $scope.districts =["Huyện Chiêm Hóa", "Huyện Hàm Yên", "Huyện Lâm Bình", "Huyện Na Hang", "Huyện Sơn Dương", "Huyện Yên Sơn", "Thành phố Tuyên Quang"];
        }else if($scope.province === 'tỉnh Vĩnh Long') {
            $scope.districts =["Huyện Bình Minh", "Huyện Bình Tân", "Huyện Long Hồ", "Huyện Mang Thít", "Huyện Tam Bình", "Huyện Trà Ôn", "Huyện Vũng Liêm", "Thành phố Vĩnh Long"];
        }else if($scope.province === 'tỉnh Vĩnh Phúc') {
            $scope.districts = ["Huyện Bình Xuyên", "Huyện Lập Thạch", "Huyện Sông Lô", "Huyện Tam Đảo", "Huyện Tam Dương", "Huyện Vĩnh Tường", "Huyện Yên Lạc", "Thành phố Vĩnh Yên", "Thị xã Phúc Yên"];
        }else if($scope.province === 'tỉnh Yên Bái') {
            $scope.districts =["Huyện Lục Yên", "Huyện Mù Căng Chải", "Huyện Trạm Tấu", "Huyện Trấn Yên", "Huyện Văn Chấn", "Huyện Văn Yên", "Huyện Yên Bình", "Huyện Yên Bái", "Thành phố Yên Bái"];
        }
    };

    $scope.onDistrict = function() {
        $scope.communes = []

// thành phố hcm 
        if($scope.district === "Quận 1") {
            $scope.communes = ["Phường Bến Nghé","Phường Bến Thành","Phường Cầu Kho","Phường Cầu Ông Lãnh","Phường Cô Giang","Phường Đa Kao","Phường Nguyễn Cư Trinh","Phường Nguyễn Thái Bình","Phường Phạm Ngũ Lão","Phường Tân Định"];
        } else if($scope.district === "Quận 2") {
            $scope.communes = ["Phường Thảo Điền", "Phường An Phú", "Phường Bình An", "Phường Bình Trưng Đông", "Phường Bình Trưng Tây", "Phường Cát Lái"];
        } else if($scope.district === "Quận 3") {
            $scope.communes = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14"];
        } else if($scope.district === "Quận 4") {
            $scope.communes = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14", "Phường 15", "Phường 16"];
        } else if($scope.district === "Quận 5") {
            $scope.communes = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14", "Phường 15", "Phường 16", "Phường 17", "Phường 18", "Phường 19", "Phường 20", "Phường 21"];
        } else if($scope.district === "Quận 6") {
            $scope.communes = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14"];
        } else if($scope.district === "Quận 7") {
            $scope.communes = ["Phường Tân Thuận Đông", "Phường Tân Thuận Tây", "Phường Tân Kiểng", "Phường Tân Hưng", "Phường Bình Thuận", "Phường Tân Quy", "Phường Phú Thuận", "Phường Tân Phú"];
        } else if($scope.district === "Quận 8") {
            $scope.communes = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14", "Phường 15", "Phường 16"];
        } else if($scope.district === "Quận 9") {
            $scope.communes = ["Phường Long Bình", "Phường Long Phước", "Phường Hiệp Phú", "Phường Phú Hữu", "Phường Phước Bình", "Phường Phước Long A", "Phường Phước Long B", "Phường Tăng Nhơn Phú A", "Phường Tăng Nhơn Phú B", "Phường Phước Khánh", "Phường Long Trường"];
        } else if($scope.district === "Quận 10") {
            $scope.communes = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14"];
        } else if($scope.district === "Quận 11") {
            $scope.communes = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14", "Phường 15", "Phường 16"];
        }else if($scope.district === "Quận 12") {
            $scope.communes = ["Phường Thạnh Xuân", "Phường Thạnh Lộc", "Phường Hiệp Thành", "Phường Thới An", "Phường Tân Chánh Hiệp", "Phường An Phú Đông", "Phường Tân Thới Hiệp", "Phường Trung Mỹ Tây", "Phường Tân Hưng Thuận", "Phường Đông Hưng Thuận", "Phường Tân Thới Nhất"];
        } else if($scope.district === "Quận Bình Tân") {
            $scope.communes = ["Phường Bình Hưng Hòa", "Phường Bình Hưng Hoà A", "Phường Bình Hưng Hoà B", "Phường Bình Trị Đông", "Phường Bình Trị Đông A", "Phường Bình Trị Đông B", "Phường Tân Tạo", "Phường Tân Tạo A", "Phường An Lạc", "Phường An Lạc A", "Phường Tân Thuận Đông", "Phường Tân Thuận Tây"];
        } else if($scope.district === "Quận Bình Thạnh") {
            $scope.communes = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14", "Phường 15", "Phường 16", "Phường 17", "Phường 18", "Phường 19", "Phường 20"];
        } else if($scope.district === "Quận Gò Vấp") {
            $scope.communes = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14", "Phường 15", "Phường 16"];
        } else if($scope.district === "Quận Phú Nhuận") {
            $scope.communes = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14", "Phường 15"];
        } else if($scope.district === "Quận Tân Bình") {
            $scope.communes = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14", "Phường 15"];
        } else if($scope.district === "Quận Tân Phú") {
            $scope.communes = ["Phường Tân Sơn Nhì", "Phường Tây Thạnh", "Phường Sơn Kỳ", "Phường Tân Qúy", "Phường Tân Thành", "Phường Phú Thọ Hòa", "Phường Phú Trung", "Phường Hoà Thạnh", "Phường Hiệp Tân", "Phường Tân Thới Hòa"];
        } else if($scope.district === "Quận Thủ Đức") {
            $scope.communes = ["Phường Linh Xuân", "Phường Bình Chiểu", "Phường Linh Trung", "Phường Tam Bình", "Phường Tam Phú", "Phường Hiệp Bình Phước", "Phường Hiệp Bình Chánh", "Phường Linh Đông", "Phường Bình Thọ", "Phường Trường Thọ", "Phường Long Bình", "Phường Long Thạnh Mỹ", "Phường Tăng Nhơn Phú A", "Phường Tăng Nhơn Phú B", "Phường Tăng Nhơn Phú C", "Phường Linh Chiểu", "Phường Linh Tây", "Phường Linh Đông"];
        } else if($scope.district === "Huyện Bình Chánh") {
            $scope.communes = ["Thị trấn Tân Túc", "Xã Phạm Văn Hai", "Xã Vĩnh Lộc A"];
        } else if($scope.district === "Huyện Cần Giờ") {
          $scope.communes = ["Thị trấn Cần Thạnh", "Xã An Thới Đông", "Xã Bình Khánh", "Xã Long Hòa", "Xã Lý Nhơn", "Xã Tam Thôn Hiệp"];
        } else if($scope.district === "Huyện Củ Chi") {
          $scope.communes = ["Thị trấn Củ Chi", "Xã An Nhơn Tây", "Xã An Phú", "Xã Bình Mỹ", "Xã Hòa Phú", "Xã Nhuận Đức", "Xã Phạm Văn Cội", "Xã Phú Hòa Đông", "Xã Phú Mỹ Hưng", "Xã Phước Hiệp", "Xã Phước Thạnh", "Xã Phước Vĩnh An", "Xã Tân An Hội", "Xã Tân Phú Trung", "Xã Tân Thạnh Đông", "Xã Tân Thạnh Tây", "Xã Tân Thông Hội", "Xã Tân Xuân", "Xã Trung An", "Xã Trung Lập Hạ", "Xã Trung Lập Thượng", "Xã Trung Mỹ Tây"];
        } else if($scope.district === "Huyện Hóc Môn") {
          $scope.communes = ["Thị trấn Hóc Môn", "Xã Bà Điểm", "Xã Đông Thạnh", "Xã Tân Hiệp", "Xã Tân Thới Nhì", "Xã Tân Xuân", "Xã Thới Tam Thôn", "Xã Trung Chánh", "Xã Xuân Thới Đông", "Xã Xuân Thới Sơn"]
        } else if($scope.district === "Huyện Nhà Bè") {
         $scope.communes = ["Thị trấn Nhà Bè", "Xã Hiệp Phước", "Xã Long Thới", "Xã Nhơn Đức", "Xã Phú Xuân", "Xã Phước Kiển", "Xã Phước Lộc", "Xã Phước Lưu", "Xã Phước Thạnh", "Xã Phước Trung", "Xã Tân An Hội", "Xã Tân Kiên", "Xã Tân Nhựt", "Xã Tân Phú", "Xã Tân Quý", "Xã Tân Thuận Đông", "Xã Tân Thuận Tây", "Xã Thạnh Lợi", "Xã Xuân Thới Sơn"];
        }
// Hải phòng 
        if($scope.district === "Huyện An Dương") {
            $scope.communes = ["Xã An Dương", "Xã An Hải", "Xã An Hoà", "Xã An Hồng", "Xã An Hưng", "Xã An Lão", "Xã An Lư", "Xã An Nghĩa", "Xã An Ngọc", "Xã An Phú", "Xã An Thái", "Xã An Thắng", "Xã An Thọ", "Xã An Tiến", "Xã An Trung", "Xã An Vĩ", "Xã An Đồng", "Xã An Đức"];
        } else if($scope.district === "Huyện An Lão") {
            $scope.communes = ["Xã An Dương", "Xã An Dương", "Xã An Hòa", "Xã An Lão", "Xã An Lư", "Xã An Nghĩa", "Xã An Ninh", "Xã An Thái", "Xã An Thắng", "Xã An Thọ", "Xã An Tiến", "Xã An Tràng", "Xã An Trung", "Xã An Vinh", "Xã An Vũ", "Xã An Đồng", "Xã An Đức"];
        } else if($scope.district === "Huyện Bạch Long Vĩ") {
            $scope.communes = ["Xã Hoành Bồ", "Xã Hiền Hào", "Xã Đồng Long", "Xã Đồng Sơn", "Xã Đồng Tiến", "Xã Đồng Tân", "Xã Đồng Thành", "Xã Đồng Tiến", "Xã Đồng Vương", "Xã Đồng Xá", "Xã Đồng ý"];
        } else if($scope.district === "Huyện Cát Hải") {
            $scope.communes = ["Xã Cát Bà", "Xã Cát Hải", "Xã Cát Vạn", "Xã Cát Đại", "Xã Cát Nông", "Xã Cát Tài", "Xã Cát Thành", "Xã Cát Trinh"];
        } else if($scope.district === "Huyện Kiến Thuỵ") {
            $scope.communes = ["Xã Đông Hải 1", "Xã Đông Hải 2", "Xã Đông Hải 3", "Xã Đông Hải 4", "Xã Đông Hải 5", "Xã Đông Hải 6", "Xã Đông Hải 7", "Xã Đông Hải 8", "Xã Đông Hải 9", "Xã Đông Hải 10", "Xã Đông Hải 11", "Xã Đông Hải 12", "Xã Đông Hải 13", "Xã Đông Hải 14", "Xã Đông Hải 15", "Xã Đông Hải 16", "Xã Đông Hải 17", "Xã Đông Hải 18", "Xã Đông Hải 19", "Xã Đông Hải 20"];
        } else if($scope.district === "Huyện Thủy Nguyên") {
            $scope.communes = ["Xã An Lư", "Xã An Lạc", "Xã An Lập", "Xã An Mỹ", "Xã An Ninh", "Xã An Sơn", "Xã An Thành", "Xã An Thắng", "Xã An Thọ", "Xã An Thọ", "Xã An Trung", "Xã An Trường", "Xã An Vĩ", "Xã An Vĩnh", "Xã An Đồng", "Xã An Đức"];
        } else if($scope.district === "Huyện Tiên Lãng") {
            $scope.communes = ["Xã Bắc Hưng", "Xã Bắc Sơn", "Xã Hải Lăng", "Xã Hải Triều", "Xã Hưng Đạo", "Xã Kiến Quốc", "Xã Lãng Sơn", "Xã Lưu Kiếm", "Xã Minh Đức", "Xã Nhân Hoà", "Xã Quang Phục", "Xã Quốc Tuấn", "Xã Tây Sơn", "Xã Tiên Cường", "Xã Tiên Hưng", "Xã Tiên Lãng", "Xã Tiên Minh", "Xã Tiên Thắng", "Xã Tiên Thanh", "Xã Tiên Tiến", "Xã Tiên Trung", "Xã Tiên Yên", "Xã Tiên Đồng", "Xã Tiên Đức"];
        } else if($scope.district === "Huyện Vĩnh Bảo") {
            $scope.communes = ["Xã Cao Minh", "Xã Hiên Hoà", "Xã Lạc Nông", "Xã Lạc Tân", "Xã Liên Hà", "Xã Minh Tân", "Xã Tân Dương", "Xã Tân Hòa", "Xã Tân Hoà", "Xã Tân Hưng", "Xã Tân Liên", "Xã Tân Minh", "Xã Tân Thành", "Xã Tân Thắng", "Xã Tân Tiến", "Xã Tân Trung", "Xã Tân Trường", "Xã Tân Đồng", "Xã Tân Đức"];
        } 

// // Đa Nang 
        if($scope.district === "Quận Hải Châu") {
            $scope.communes = ["Phường Bình Hiên", "Phường Bình Thuận", "Phường Hải Châu 1", "Phường Hải Châu 2", "Phường Hòa Cường Bắc", "Phường Hòa Cường Nam", "Phường Hòa Thuận Đông", "Phường Hòa Thuận Tây", "Phường Nam Dương", "Phường Phước Ninh", "Phường Thạch Thang", "Phường Thanh Bình", "Phường Thuận Phước"];
        } else if($scope.district === "Quận Thanh Khê") {
            $scope.communes =  ["Phường An Khê", "Phường Chính Gián", "Phường Hòa Khê", "Phường Tam Thuận", "Phường Tân Chính", "Phường Thanh Khê Đông", "Phường Thanh Khê Tây", "Phường Thạc Gián"];
        } else if($scope.district === "Quận Sơn Trà") {
            $scope.communes = ["Phường An Hải Bắc", "Phường An Hải Đông", "Phường An Hải Tây", "Phường Mân Thái", "Phường Nại Hiên Đông", "Phường Phước Mỹ", "Phường Thọ Quang"];
        } else if($scope.district === "Quận Ngũ Hành Sơn") {
            $scope.communes = ["Phường Hoà Cường Bắc", "Phường Hoà Cường Nam", "Phường Hoà Hải", "Phường Hoà Quý", "Phường Khuê Mỹ"];
        } else if($scope.district === "Huyện Cẩm Lệ") {
            $scope.communes = ["Xã Hòa An", "Xã Hòa Phát", "Xã Hòa Thọ Đông", "Xã Hòa Thọ Tây", "Xã Hòa Xuân"];
        } else if($scope.district === "Huyện Liên Chiểu") {
            $scope.communes = ["Xã Hoà Hiệp Bắc", "Xã Hoà Hiệp Nam", "Xã Hoà Khương", "Xã Hoà Liên", "Xã Hoà Nhơn", "Xã Hoà Ninh", "Xã Hoà Phát", "Xã Hoà Phước", "Xã Hoà Sơn", "Xã Hoà Tiến"];
        } else if($scope.district === "Huyện Hòa Vang") {
            $scope.communes = ["Xã Hòa Bắc", "Xã Hòa Châu", "Xã Hòa Khương", "Xã Hòa Liên", "Xã Hòa Nhơn", "Xã Hòa Ninh", "Xã Hòa Phong", "Xã Hòa Phước", "Xã Hòa Sơn", "Xã Hòa Tiến", "Xã Hòa Phú", "Xã Hòa Phát"];
        } 

// // can thơ 
        if($scope.district === "Huyện Cờ Đỏ") {
            $scope.communes = ["Xã Cờ Đỏ", "Xã Đông Hiệp", "Xã Đông Thắng", "Xã Thạnh Phú", "Xã Thới Đông", "Xã Thới Hưng", "Xã Thới Xuân"];
        } else if($scope.district === "Huyện Phong Điền") {
            $scope.communes = ["Xã Giai Xuân", "Xã Mỹ Khánh", "Xã Nhơn Ái", "Xã Nhơn Nghĩa", "Xã Phong Mỹ", "Xã Tân Thới", "Xã Trường Long", "Xã Trường Long A"];
        } else if($scope.district === "Huyện Thới Lai") {
            $scope.communes = ["Xã Thới Lai", "Xã Thới Thạnh", "Xã Thới Tân", "Xã Thới Tam Thôn", "Xã Thới Tuệ"];
        } else if($scope.district === "Huyện Vĩnh Thạnh") {
            $scope.communes = ["Xã Vĩnh An", "Xã Vĩnh Bình", "Xã Vĩnh Hưng", "Xã Vĩnh Lợi", "Xã Vĩnh Mỹ", "Xã Vĩnh Ngươn", "Xã Vĩnh Thành", "Xã Vĩnh Thịnh", "Xã Vĩnh Trung", "Xã Vĩnh Tường"];
        } else if($scope.district === "Huyện Cái Răng") {
            $scope.communes = ["Xã Ba Láng", "Xã Hưng Phú", "Xã Hưng Thạnh", "Xã Lê Bình", "Xã Nhơn Nghĩa", "Xã Phú Thứ", "Xã Thường Thạnh"];
        } else if($scope.district === "Huyện Thốt Nốt") {
            $scope.communes = ["Xã Thốt Nốt", "Xã Thuận An", "Xã Trường Long", "Xã Trường Lạc"];
        } else if($scope.district === "Huyện Ô Môn") {
            $scope.communes = ["Xã Châu Văn Liêm", "Xã Long Hưng", "Xã Phước Thạnh", "Xã Thới An Đông", "Xã Thới Hòa", "Xã Thới Long", "Xã Trường Thành"];
        }

// // an giang 
        if($scope.district === "Huyện An Phú") {
            $scope.communes = ["Xã An Phú", "Xã Khánh An", "Xã Khánh Bình", "Xã Long Bình", "Xã Nhơn Hội", "Xã Phú Hữu", "Xã Phú Hội", "Xã Phú Hội", "Xã Phước Hưng", "Xã Quốc Thái", "Xã Vĩnh Hậu"];
        } else if($scope.district ===  "Huyện Châu Phú") {
            $scope.communes = ["Xã Bình Chánh", "Xã Bình Long", "Xã Bình Mỹ", "Xã Bình Phú", "Xã Bình Thủy", "Xã Châu Phú A", "Xã Châu Phú B", "Xã Châu Thành", "Xã Lê Chánh", "Xã Phú Hưng", "Xã Vĩnh Châu"];
        } else if($scope.district ===  "Huyện Châu Phú") {
            $scope.communes = ["Xã An Hiệp", "Xã An Hóa", "Xã An Khánh", "Xã An Phước", "Xã An Thạnh", "Xã Châu Thành", "Xã Hòa Lạc", "Xã Phú An", "Xã Phú Hưng", "Xã Phú Tân", "Xã Thiện Mỹ"];
        } else if($scope.district === 'Huyện Chợ Mới') {
            $scope.communes = ["Xã An Thạnh Trung", "Xã Bình Phước Xuân", "Xã Hòa An", "Xã Hòa Bình", "Xã Hòa Thuận", "Xã Kiến An", "Xã Kiến Thành", "Xã Long Điền A", "Xã Long Điền B", "Xã Long Giang", "Xã Long Kiến", "Xã Long Trị", "Xã Long Trị A", "Xã Long Trị B", "Xã Thanh Bình", "Xã Thanh Hoà", "Xã Thanh Lương", "Xã Thới Hòa", "Xã Trường Xuân", "Xã Trường Xuân A", "Xã Trường Xuân B"];
        } else if($scope.district === 'Huyện Phú Tân') {
            $scope.communes = ["Xã An Cư", "Xã An Hảo", "Xã An Khánh", "Xã An Ninh", "Xã An Phú", "Xã An Tân", "Xã An Trạch", "Xã Đa Phước", "Xã Phú Mỹ", "Xã Phú Tâm", "Xã Tân Hưng", "Xã Tân Hội", "Xã Tân Lập", "Xã Tân Lợi", "Xã Tân Lợi", "Xã Tân Nghĩa", "Xã Tân Phước", "Xã Tân Quan", "Xã Tân Thành", "Xã Tân Thạnh", "Xã Tân Tiến", "Xã Tân Đông", "Xã Tân Hòa"];
        } else if($scope.district === 'Huyện Thoại Sơn') {
            $scope.communes = ["Xã An Bình", "Xã An Hòa", "Xã An Quang", "Xã An Thọ", "Xã Bình Thành", "Xã Mỹ An", "Xã Mỹ Hiệp", "Xã Mỹ Hòa", "Xã Mỹ Lộc", "Xã Mỹ Phú", "Xã Mỹ Quý", "Xã Mỹ Thọ", "Xã Mỹ Thọ", "Xã Mỹ Thạnh", "Xã Mỹ Thạnh", "Xã Tân Thuận", "Xã Tân Tiến", "Xã Thoại Giang", "Xã Thoại Giang Đông", "Xã Thoại Giang Tây"];
        } else if($scope.district === 'Huyện Tịnh Biên') {
            $scope.communes = ["Xã An Cư", "Xã An Hảo", "Xã An Nông", "Xã An Phú", "Xã An Thạnh", "Xã Chợ Mới", "Xã Nhơn Mỹ", "Xã Nhơn Phú", "Xã Tân Lập", "Xã Tân Mỹ", "Xã Tân Quới"];
        } else if($scope.district === 'Huyện Tri Tôn') {
            $scope.communes = ["Xã An Cư", "Xã An Hảo", "Xã An Nông", "Xã Châu Lăng", "Xã Cô Tô", "Xã Lạc Quới", "Xã Lê Trì", "Xã Lương Phi", "Xã Núi Tô", "Xã Tà Đảnh", "Xã Tri Tôn", "Xã Vĩnh Gia", "Xã Vĩnh Phước"];
        } 

// vungx tau 
        if($scope.district === "Huyện Châu Đức") {
            $scope.communes = ["Xã Bàu Chinh", "Xã Bình Ba", "Xã Bình Giã", "Xã Bình Trung", "Xã Cù Bị", "Xã Đá Bạc", "Xã Kim Long", "Xã Láng Lớn", "Xã Ngãi Giao", "Xã Quảng Thành", "Xã Sơn Bình", "Xã Suối Nghệ", "Xã Suối Rao", "Xã Xà Bang", "Xã Xuân Sơn"];
        } else if($scope.district === "Huyện Côn Đảo") {
            $scope.communes = ["Xã An Hải", "Xã An Vĩnh", "Xã Con Đảo"];
        } else if($scope.district === "Huyện Đất Đỏ") {
            $scope.communes = ["Xã Đất Đỏ", "Xã Láng Dài", "Xã Long Mỹ", "Xã Long Tân", "Xã Phước Hải", "Xã Phước Hội", "Xã Phước Long Thọ", "Xã Phước Tỉnh", "Xã Phước Đại", "Xã Phước Đông", "Xã Phước Xuân"];
        } else if($scope.district === "Huyện Long Điền") {
            $scope.communes = ["Xã An Ngãi", "Xã An Nhứt", "Xã Long Điền", "Xã Long Hải", "Xã Long Tân", "Xã Phước Hưng", "Xã Tam Phước"];
        } else if($scope.district === "Huyện Tân Thành") {
            $scope.communes = ["Xã Chí Linh", "Xã Hòa Hiệp", "Xã Hòa Hội", "Xã Hòa Long", "Xã Hòa Nhơn", "Xã Hòa Ninh", "Xã Hòa Phong", "Xã Hòa Phú", "Xã Hòa Sơn", "Xã Hòa Tân", "Xã Hòa Thắng", "Xã Hòa Thành", "Xã Hòa Thuận", "Xã Hòa Vinh", "Xã Hòa Xuân"];
        } else if($scope.district === "Huyện Xuyên Mộc") {
            $scope.communes = ["Xã Bàu Lâm", "Xã Bình Châu", "Xã Bông Trang", "Xã Hòa Bình", "Xã Hòa Hiệp", "Xã Hòa Hội", "Xã Hòa Hưng", "Xã Hòa Lâm", "Xã Hòa Long", "Xã Hòa Nam", "Xã Hòa Phú", "Xã Hòa Phước", "Xã Hòa Tâm", "Xã Hòa Thành", "Xã Hòa Thạnh", "Xã Hòa Thắng", "Xã Hòa Xuân", "Xã Phước Bửu", "Xã Phước Tân", "Xã Phước Thuận", "Xã Phước Đông", "Xã Phước Đại", "Xã Phước Định", "Xã Phước Hòa"];
        } 
// // bac giang 
        if($scope.district === 'Huyện Lục Ngạn') {
             $scope.communes = ["Hoàng Tung","Kiên Lao","Minh Sơn","Minh Dân","Phan Đình Phùng","Quý Quân","Thanh Lương","Tân Lập","Trường Giang","Trường Sơn","Vô Tranh","Yên Lư"];
        } else if($scope.district === 'Huyện Sơn Động') {
            $scope.communes = ["An Hòa","An Sơn","An Lạc","An Bá","An Tường","An Lạc Thôn","Bắc Sơn","Chiến Thắng","Đồng Tiến","Đức Thông","Đức Long","Hồng Giang","Hương Gián","Lương Điền","Nam Sơn","Quang Tiến","Tân Trường","Thanh Đức","Tân Thanh","Thắng Lợi","Thượng Lâm","Tùng Giang","Trường Giang","Trường Sơn","Trường Xá","Vạn Thọ","Vĩnh Tiến","Yên Định","Yên Lâm"];
        } else if($scope.district === 'Huyện Lục Nam') {
            $scope.communes = ["Bắc Lũng","Bảo Đài","Cẩm Lý","Cẩm Đàn","Cẩm Đình","Cẩm Lĩnh","Cẩm Quan","Cẩm Thành","Cẩm Trung","Cẩm Vân","Cẩm Võ","Cảm Ân","Cảm Nhân","Chu Điện","Huyền Sơn","Hồng Ân","Hồng Giang","Hương Lâm","Hương Sơn","Hương Vĩnh","Hương Xuân","Hữu Sản","Lục Nam","Lục Sơn","Lục Vượng","Phương Sơn","Quan Sơn","Quang Sơn","Quang Tiến","Tân Lập","Tân Quang","Thanh Sơn","Thuần Mang","Tiên Hưng","Tiên Nha","Trường Giang","Trường Sơn","Trường Xuân","Trường Yên","Trường Yên Hạ","Trường Yên Lâm","Trường Yên Lư","Trường Yên Sơn","Trường Yên Trung","Tự Lạn","Vô Tranh","Vũ Xá","Yên Sơn","Yên Thắng","Yên Thọ","Yên Vĩnh"];
        } else if($scope.district === "Huyện Tân Yên") {
            $scope.communes = ["Xã Tân Yên", "Xã Tân Trung", "Xã Tân Thành", "Xã Tân Phú", "Xã Tân Lập", "Xã Tân Hưng", "Xã Tân Hòa", "Xã Tân Thịnh", "Xã Tân Thắng", "Xã Tân Cương", "Xã Tân Tiến", "Xã Tân Phúc", "Xã Tân Xuân", "Xã Tân Đồng", "Xã Tân Long", "Xã Tân Thượng", "Xã Tân Liên", "Xã Tân Bình", "Xã Tân Mỹ", "Xã Tân Hội", "Xã Tân Khánh", "Xã Tân Phượng", "Xã Tân Đức", "Xã Tân Lợi", "Xã Tân Thanh"];
        } else if($scope.district === 'Huyện Yên Dũng') {
            $scope.communes = ["Xã Yên Dũng", "Xã Thanh Long", "Xã Động Đạt", "Xã Đức Giang", "Xã Đông Sơn", "Xã Đồng Phú", "Xã Đồng Việt", "Xã Đồng Phúc", "Xã Đồng Tâm", "Xã Đồng ý", "Xã Đồng Lạc", "Xã Đồng Cương", "Xã Đồng Vương"];
        } else if($scope.district === 'Huyện Hiệp Hòa') {
            $scope.communes =  ["Xã Hiệp Hòa", "Xã Hồng Châu", "Xã Hoàng Đạo", "Xã Hoàng Lương", "Xã Hoàng An", "Xã Hoàng Thanh", "Xã Hoàng Thành", "Xã Hoàng Vân", "Xã Hoàng Xá", "Xã Hoàng Diệu", "Xã Hoàng Đồng", "Xã Hoàng Minh", "Xã Hoàng Quân", "Xã Hoàng Kim"];
        } else if($scope.district === 'Huyện Lạng Giang') {
            $scope.communes = ["Xã Lạng Giang", "Xã Quang Tiến", "Xã Quang Trung", "Xã Quang Vinh", "Xã Quang Tân", "Xã Quang Trường", "Xã Quang Châu", "Xã Quang Tiến", "Xã Quang Thắng", "Xã Quang Thịnh", "Xã Quang Thành", "Xã Quang Hưng", "Xã Quang Lạc"];
        } else if($scope.district === 'Huyện Việt Yên') {
            $scope.communes = ["Xã Việt Yên", "Xã Nghĩa Trung", "Xã Nghĩa Hưng", "Xã Nghĩa Đạo", "Xã Nghĩa Long", "Xã Nghĩa Lạc", "Xã Nghĩa Phú", "Xã Nghĩa Hòa", "Xã Nghĩa Thắng", "Xã Nghĩa Trị", "Xã Nghĩa Hồng", "Xã Nghĩa Minh"];
        } else if($scope.district === 'Huyện Yên Thế') {
            $scope.communes = ["Xã Yên Thế", "Xã Tiến Thắng", "Xã Tiến Thuận", "Xã Tiến Hưng", "Xã Tiến Thành", "Xã Tiến Tân", "Xã Tiến Hòa", "Xã Tiến Thịnh", "Xã Tiến Phú", "Xã Tiến Thành", "Xã Tiến Hưng", "Xã Tiến Hòa"];
        } 
// // bac kan 
        if($scope.district === 'Huyện Ba Bể') {
            $scope.communes = ["Xã Chợ Rã", "Xã Chợ Mới", "Xã Quảng Khê", "Xã Bành Trạch", "Xã Phúc Lộc", "Xã Cao Thượng", "Xã Cao Trĩ", "Xã Khang Ninh", "Xã Nam Mẫu", "Xã Nội Trạch", "Xã Địa Linh", "Xã Đồng Năng"];
        } else if($scope.district === 'Huyện Bạch Thông') {
            $scope.communes = ["Xã Phúc Hòa", "Xã Hương Lâm", "Xã Hoàng Trĩ", "Xã Yên Thành", "Xã Cẩm Giàng", "Xã Yên Hà", "Xã Tân Tiến", "Xã Yên Phú", "Xã Yên Mỹ", "Xã Yên Mạc", "Xã Yên Đồng", "Xã Yên Thái"];
        } else if($scope.district === 'Huyện Chợ Đồn') {
            $scope.communes = ["Xã Chợ Đồn", "Xã Bình Văn", "Xã Phúc Thịnh", "Xã Thanh Đa", "Xã Pác Miầu", "Xã Đồng Khê", "Xã Đức Long", "Xã Lục Bình", "Xã Thái Bình", "Xã Lăng Hiếu", "Xã Đồng Phú", "Xã Nam Cao", "Xã Nam Quang"];
        } else if($scope.district === 'Huyện Chợ Mới') {
            $scope.communes = ["Xã Kiến Đức", "Xã Quang Trung", "Xã Trung Hòa", "Xã Trung Lương", "Xã Trung Sơn", "Xã Trung Thành", "Xã Trung Tiến", "Xã An Tảo", "Xã Bình Lăng", "Xã Bình Long", "Xã Bình Thành", "Xã Bình Trung", "Xã Hòa Bình", "Xã Hồng Việt", "Xã Hồng Thái", "Xã Mỹ Hương", "Xã Mỹ Lương", "Xã Mỹ Thành", "Xã Mỹ Trung", "Xã Mỹ Xá"];
        } else if($scope.district === 'Huyện Na Rì') {
            $scope.communes = ["Xã Yến Lạc", "Xã Yên Nguyên", "Xã Yên Trạch", "Xã Yên Cường", "Xã Yên Thắng", "Xã Yên Phú", "Xã Yên Phong", "Xã Yên Chính", "Xã Yên Bình", "Xã Yên Đồng", "Xã Yên Thành", "Xã Yên Hưng", "Xã Yên Thế"];
        } else if($scope.district === 'Huyện Ngân Sơn') {
            $scope.communes = ["Xã Bằng Vân", "Xã Bằng Hành", "Xã Đức Ninh", "Xã Nhạn Môn", "Xã Tam Kim", "Xã Vân Tùng", "Xã Vân Sơn", "Xã Vân Hội", "XãTiến Sơn", "Xã Vân Thủy", "Xã Vân Xuân", "Xã Vân Khánh", "Xã Vân Phú", "Xã Vân Đồn", "Xã Vân Trình", "Xã Vân Hưng", "Xã Vân Thượng"];
        } else if($scope.district === 'Huyện Pác Nặm') {
            $scope.communes = ["Xã Đức Thông", "Xã Thanh Vận", "Xã Thanh Mai", "Xã Thanh Đức", "Xã Thanh Phong", "Xã Thanh Tiến", "Xã Thanh Long", "Xã Thanh Thịnh", "Xã Thanh An", "Xã Thanh Chi", "Xã Thanh Lâm", "Xã Thanh Lương", "Xã Thanh Khê", "Xã Thanh Xá", "Xã Thanh Phúc", "Xã Thanh Tùng", "Xã Thanh Hưng", "Xã Thanh Ngọc", "Xã Thanh Hòa", "Xã Thanh Nông", "Xã Thanh Phú", "Xã Thanh Thủy", "Xã Thanh Bình", "Xã Thanh Hương", "Xã Thanh Lương"];
        } 
// bac lieu 
        if($scope.district === "Huyện Đông Hải") {
            $scope.communes = ["Xã Đông Hải 1", "Xã Đông Hải 2", "Xã Đông Hải 3", "Xã Đông Hải 4", "Xã Đông Hải 5", "Xã Đông Hải 6", "Xã Đông Hải 7", "Xã Đông Hải 8", "Xã Đông Hải 9", "Xã Đông Hải 10"];
        } else if($scope.district === "Huyện Giá Rai") {
            $scope.communes = ["Xã Giá Rai", "Xã Xương Giang", "Xã Bạch Đông", "Xã Nhơn Hải", "Xã Phước Hưng", "Xã Phước Hòa", "Xã Phước Hải", "Xã An Hòa", "Xã An Hải", "Xã Gia Hòa", "Xã Gia Lạc", "Xã Gia Phước"];
        } else if($scope.district === 'Huyện Hoà Bình') {
            $scope.communes = ["Xã Hoà Bình 1", "Xã Hoà Bình 2", "Xã Hoà Bình 3", "Xã Hoà Bình 4", "Xã Hoà Bình 5", "Xã Hoà Bình 6", "Xã Hoà Bình 7", "Xã Hoà Bình 8", "Xã Hoà Bình 9", "Xã Hoà Bình 10"];
        } else if($scope.district === 'Huyện Hồng Dân') {
            $scope.communes = ["Xã Hồng Dân", "Xã An Ninh Đông", "Xã An Ninh Tây", "Xã An Ninh Nam", "Xã An Ninh Bắc", "Xã An Ninh Hưng", "Xã An Ninh Đông", "Xã An Ninh Tây", "Xã An Ninh Nam", "Xã An Ninh Bắc"];
        } else if($scope.district === 'Huyện Phước Long') {
            $scope.communes = ["Xã Long Phước", "Xã Phước Hòa", "Xã Phước Long", "Xã Phước Bình", "Xã Phước Đức", "Xã Phước Hưng", "Xã Phước Lâm", "Xã Phước Hiệp", "Xã Phước Lộc", "Xã Phước Thành"];
        } else if($scope.district === 'Huyện Vĩnh Lợi') {
            $scope.communes = ["Xã Vĩnh Thịnh", "Xã Vĩnh Phú", "Xã Vĩnh Lợi", "Xã Vĩnh Hưng", "Xã Vĩnh Hòa", "Xã Vĩnh Hiệp", "Xã Vĩnh Bình", "Xã Vĩnh Long", "Xã Vĩnh Khánh", "Xã Vĩnh Hội Đông", "Xã Vĩnh Tân"];
        } else if($scope.district === 'Huyện Đông Hải 1') {
            $scope.communes = ["Xã Đông Hải 1", "Xã Đông Hải 2", "Xã Đông Hải 3", "Xã Đông Hải 4", "Xã Đông Hải 5", "Xã Đông Hải 6", "Xã Đông Hải 7", "Xã Đông Hải 8", "Xã Đông Hải 9", "Xã Đông Hải 10"];
        }

// bắc ninh
        if($scope.district === 'Huyện Gia Bình') {
            $scope.communes = ["Xã Gia Bình", "Xã Thái Bảo", "Xã Giang Sơn", "Xã Cao Đức", "Xã Đại Lai", "Xã Song Giang", "Xã Bình Dương", "Xã Lãng Ngâm", "Xã Nhân Thắng", "Xã Xuân Lai", "Xã Đông Cứu", "Xã Đại Lâm"];
        } else if($scope.district === 'Huyện Lương Tài') {
            $scope.communes = ["Xã Lương Tài", "Xã Lai Hạ", "Xã Trường Thành", "Xã Cương Thịnh", "Xã Lạc Vệ", "Xã Liên Bão", "Xã Thanh Hòa", "Xã Tiền Phong", "Xã Đình Chu", "Xã Cảnh Thụy", "Xã Đình Tổ", "Xã Trí Yên"];
        } else if($scope.district === 'Huyện Quế Võ') {
            $scope.communes = ["Xã Phố Mới", "Xã Việt Hùng", "Xã Ngọc Xá", "Xã Châu Phong", "Xã Phượng Mao", "Xã Việt Thuận", "Xã Phù Lương", "Xã Phù Lãng", "Xã Trạm Lộ", "Xã Liên Hòa", "Xã Đại Đồng", "Xã Tân Hồng"];
        } else if($scope.district === 'Huyện Thuận Thành') {
            $scope.communes = ["Xã Thanh Khương", "Xã Thuận Thành", "Xã Song Hồ", "Xã Dũng Nghĩa", "Xã Lương Tài", "Xã Hòa Thịnh", "Xã An Bình", "Xã An Thái", "Xã An Khánh", "Xã Hồ", "Xã Trung", "Xã Hữu Bằng"];
        } else if($scope.district === 'Huyện Tiên Du') {
            $scope.communes = ["Xã Tiên Nội", "Xã Hồng Dụ", "Xã Lạc Vệ", "Xã Đại Đồng", "Xã Ngũ Thái", "Xã Đông Ngàn", "Xã Phù Đổng", "Xã Đại Hưng", "Xã Thanh Vân", "Xã Nghĩa Đạo", "Xã Minh Đạo", "Xã Cảnh Hưng"];
        } else if($scope.district === 'Huyện Yên Phong') {
            $scope.communes = ["Xã Yên Phong", "Xã Đông Phong", "Xã Trung Phú", "Xã Thụy Phú", "Xã Đông Tiến", "Xã Đông Thọ", "Xã Đông Minh", "Xã Đông Phương", "Xã Đông Phong", "Xã Trung Kênh", "Xã Đông Thạnh", "Xã Đông Hoàng"];
        } else if($scope.district === 'Huyện Bắc Ninh') {
            $scope.communes = ["Xã Vũ Ninh", "Xã Vũ Đông", "Xã Vũ Lâm", "Xã Vũ Lễ", "Xã Vũ Quý", "Xã Vũ Tiến", "Xã Vũ Vân", "Xã Vũ Vinh", "Xã Vũ Đại", "Xã Vũ Phúc"];
        } 

// bến tre 
        if($scope.district === "Huyện Ba Tri") {
            $scope.communes = ["Xã Ba Tri", "Xã Tân Mỹ", "Xã Mỹ Hòa", "Xã Tân Xuân", "Xã An Ngãi", "Xã An Hiệp", "Xã An Bình Tây", "Xã Bảo Thạnh", "Xã Tân Thủy", "Xã Tân Hưng", "Xã Mỹ Chánh", "Xã Mỹ Nhơn"];
        } else if($scope.district === 'Huyện Bình Đại') {
            $scope.communes = ["Xã Bình Đại", "Xã Tam Hiệp", "Xã Long Định", "Xã Long Hòa", "Xã Phú Thuận", "Xã Vang Quới Đông", "Xã Vang Quới Tây", "Xã Châu Hưng", "Xã Phú Vang", "Xã Lộc Thuận", "Xã Định Trung", "Xã Thanh Điền"];
        } else if($scope.district === 'Huyện Châu Thành') {
            $scope.communes = ["Xã Châu Thành", "Xã Tân Thành", "Xã Bình Thành", "Xã An Hòa", "Xã An Điền", "Xã Thành Đông", "Xã An Thuận", "Xã An Quy", "Xã Thành Trung", "Xã An Hiệp", "Xã An Ninh", "Xã An Bình"];
        } else if($scope.district === 'Huyện Chợ Lách') {
            $scope.communes = ["Xã Chợ Lách", "Xã Phú Phụng", "Xã Sơn Định", "Xã Vĩnh Bình", "Xã Vĩnh Hòa", "Xã Hòa Nghĩa", "Xã Long Thới", "Xã Phú Sơn", "Xã Hưng Khánh Trung A", "Xã Hưng Khánh Trung B", "Xã Hưng Đông", "Xã Hưng Lễ"];
        } else if($scope.district === 'Huyện Giồng Trôm') {
            $scope.communes = ["Xã Giồng Trôm", "Xã Phong Nẫm", "Xã Phong Mỹ", "Xã Mỹ Thạnh", "Xã Châu Hòa", "Xã Lương Hòa", "Xã Lương Quới", "Xã Lương Phú", "Xã Châu Bình", "Xã Thuận Điền", "Xã Sơn Phú"];
        } else if($scope.district === 'Huyện Mỏ Cày Bắc') {
            $scope.communes =  ["Xã Mỏ Cày Bắc", "Xã Hòa Lộc", "Xã Bình Khánh Đông", "Xã Thành Thới A", "Xã Thành Thới B", "Xã Tân Thành Bình", "Xã An Định", "Xã An Thạnh", "Xã Phước Hưng", "Xã An Điền", "Xã An Thuận", "Xã An Nhơn"];
        } else if($scope.district === 'Huyện Mỏ Cày Nam') {
            $scope.communes = ["Xã Mỏ Cày Nam", "Xã Định Thủy", "Xã Ngãi Đăng", "Xã Phước Mỹ Trung", "Xã Phước Mỹ Tây", "Xã Tân Hội", "Xã Tân Trung", "Xã Hương Mỹ", "Xã Chánh Hội", "Xã An Thạnh", "Xã An Định", "Xã An Thới"];
        } else if($scope.district === 'Huyện Thạnh Phú') {
            $scope.communes = ["Xã Thạnh Phú", "Xã Phú Khánh", "Xã Đại Điền", "Xã Quới Điền", "Xã Quới Thành", "Xã Thới Thạnh", "Xã Thạnh Hải", "Xã Thạnh Phong", "Xã Thạnh Lộc", "Xã Thới Thuận", "Xã Tân Phong"];
        } else if($scope.district === 'Huyện Bến Tre') {
            $scope.communes = ["Xã Phú Khương", "Xã Phú Nhuận", "Xã Phú Hưng", "Xã Phú Lợi", "Xã Phú Tân"];
        }

// binh định 
        if($scope.district === 'Huyện An Lão') {
            $scope.communes = ["Xã An Lão", "Xã An Hưng", "Xã An Trung", "Xã An Dũng", "Xã An Vinh", "Xã An Toàn", "Xã An Tân", "Xã An Hòa", "Xã An Quang", "Xã An Nghĩa", "Xã An Bình", "Xã An Thạnh", "Xã An Phú"];
        } else if($scope.district === 'Huyện An Nhơn') {
            $scope.communes = ["Xã An Nhơn", "Xã Nhơn Hòa", "Xã Nhơn Hưng", "Xã Nhơn Phong", "Xã Nhơn An", "Xã Nhơn Phúc", "Xã Nhơn Phú", "Xã Nhơn Hải", "Xã Nhơn Châu", "Xã Nhơn Hội", "Xã Nhơn Lộc", "Xã Nhơn Khánh"];
        } else if($scope.district === 'Huyện Hoài Ân') {
            $scope.communes = ["Xã Hoài Ân", "Xã Bok Tới", "Xã Hoài Thanh Tây", "Xã Hoài Thanh", "Xã Hoài Hương", "Xã Hoài Tân", "Xã Hoài Hải", "Xã Hoài Xuân", "Xã Hoài Mỹ", "Xã Hoài Châu Bắc", "Xã Hoài Châu", "Xã Hoài Phú"];
        } else if($scope.district === 'Huyện Hoài Nhơn') {
            $scope.communes = ["Xã Bồng Sơn", "Xã Phước Sơn", "Xã Phước Hòa", "Xã Phước Thọ", "Xã Phước Châu", "Xã Phước Vĩnh", "Xã Phước Đức", "Xã Phước Hưng", "Xã Phước Lộc", "Xã Phước Quang"];
        } else if($scope.district === 'Huyện Phù Cát') {
            $scope.communes = ["Xã Ngô Mây", "Xã Cát Sơn", "Xã Cát Minh", "Xã Cát Khánh", "Xã Cát Tài", "Xã Cát Lâm", "Xã Cát Hanh", "Xã Cát Thành", "Xã Cát Trinh", "Xã Cát Hưng", "Xã Cát Hiệp", "Xã Cát Nhơn"];
        } else if($scope.district === 'Huyện Phù Mỹ') {
            $scope.communes = ["Xã Bình Dương", "Xã Tam Quan Bắc", "Xã Tam Quan Nam", "Xã Bồng Sơn", "Xã Hoài Xuân", "Xã Hoài Sơn", "Xã Hoài Hảo", "Xã Hoài Tân", "Xã Hoài Hương", "Xã Hoài Hải", "Xã Hoài Đức", "Xã Hoài Phú"];
        } else if($scope.district === 'Huyện Tây Sơn') {
            $scope.communes = ["Xã Phú Thứ", "Xã Phú Mỡ", "Xã Phú Vân", "Xã Phú Lâm", "Xã Phú Lộc", "Xã Phú Định", "Xã Phú Sơn", "Xã Phú Thọ", "Xã Phú Hòa", "Xã Phú Cường", "Xã Phú Xuân"];
        } else if($scope.district === 'Huyện Tuy Phước') {
            $scope.communes = ["Xã Diêu Trì", "Xã Phước Thắng", "Xã Phước Hòa", "Xã Phước Thuận", "Xã Phước Hưng", "Xã Phước Hiệp", "Xã Phước Hoà", "Xã Phước Đại", "Xã Phước Quang", "Xã Phước Sơn", "Xã Phước Lộc"];
        } else if($scope.district === 'Huyện Vân Canh') {
            $scope.communes = ["Xã Canh Hiển", "Xã Canh Thuận", "Xã Canh Hòa", "Xã Canh Liên", "Xã Canh Hiệp", "Xã Canh Vinh", "Xã Canh Hiệp", "Xã Canh Lộc"];
        } else if($scope.district === 'Huyện Vĩnh Thạnh') {
            $scope.communes = ["Xã Vĩnh Thạnh", "Xã Vĩnh Sơn", "Xã Vĩnh Hiệp", "Xã Vĩnh Hảo", "Xã Vĩnh Hòa", "Xã Vĩnh Thịnh", "Xã Vĩnh Quang", "Xã Vĩnh Tân", "Xã Vĩnh Châu", "Xã Vĩnh Trung", "Xã Vĩnh Hiển", "Xã Vĩnh Hưng"];
        } 

// binh duong
        if($scope.district === "Huyện Bàu Bàng") {
            $scope.communes = ["Xã Lai Uyên", "Xã Trừ Văn Thố", "Xã Cây Trường II", "Xã Hưng Hòa", "Xã Lai Hưng", "Xã Long Nguyên", "Xã Trừ Văn Thố", "Xã Cây Trường", "Xã Hưng Thuận", "Xã Lai Uyên", "Xã Lai Hưng"];
        } else if($scope.district === 'Huyện Bắc Tân Uyên') {
            $scope.communes = ["Xã Tân Định", "Xã Đất Cuốc", "Xã An Vĩnh Ngãi", "Xã Tân Đông Hiệp", "Xã Thường Tân", "Xã Lạc An", "Xã Tân Hiệp", "Xã Bình Mỹ", "Xã Tân Lập", "Xã Tân Mỹ", "Xã Thạnh Tân"];
        } else if($scope.district === 'Huyện Bến Cát') {
            $scope.communes = ["Xã Chánh Phú Hòa", "Xã An Điền", "Xã An Tây", "Xã An Nhứt", "Xã Phú An", "Xã Thanh Tuyền", "Xã Lợi Thuận", "Xã An Phước", "Xã Phú Lâm", "Xã Phú Hòa", "Xã Mỹ Phước", "Xã Chánh Nghĩa"];
        } else if($scope.district === 'Huyện Dầu Tiếng') {
            $scope.communes = ["Xã Tiến Hưng", "Xã Hưng Hà", "Xã Thanh Tuyền", "Xã Mỹ Phước", "Xã Lộc Hưng", "Xã Thanh Phước", "Xã Tân Lập", "Xã Thuận Đạo", "Xã Định An", "Xã Thanh An", "Xã Long Hoà", "Xã Định Hiệp"];
        } else if($scope.district === 'Huyện Phú Giáo') {
            $scope.communes = ["Xã An Bình", "Xã An Linh", "Xã Tam Lập", "Xã An Long", "Xã Phước Sang", "Xã Tam Phước", "Xã Tân Hiệp", "Xã An Bình", "Xã An Linh", "Xã Phước Hoà"];
        } else if($scope.district === 'Huyện Tân Uyên') {
            $scope.communes = ["Xã Uyên Hưng", "Xã Tân Phước Khánh", "Xã Tân Định", "Xã Khánh Bình", "Xã Tân Lập", "Xã Bạch Đằng", "Xã Tân Mỹ", "Xã Thái Hòa", "Xã Thạnh Phước", "Xã Tân Hiệp", "Xã Khánh Hòa"];
        } else if($scope.district === 'Huyện Thuận An') {
            $scope.communes = ["Xã An Thạnh", "Xã Bình Chuẩn", "Xã Bình Hòa", "Xã Vĩnh Phú", "Xã Vĩnh Tân", "Xã Thuận Giao", "Xã Hưng Định", "Xã An Sơn", "Xã An Phú", "Xã Bình Nhâm"];
        } else if($scope.district === 'Huyện Dĩ An') {
            $scope.communes = ["Xã An Bình", "Xã Bình An", "Xã Đông Hòa", "Xã Tân Bình", "Xã Tân Đông Hiệp", "Xã Tân Hiệp", "Xã Đông Hòa", "Xã Bình Thắng", "Xã An Phú", "Xã Bình Chánh"];
        } 

// binh phuoc
        if($scope.district === 'Huyện Bù Đăng') {
            $scope.communes = ["Xã Đak Nhau", "Xã Phú Tân", "Xã Phú Vinh", "Xã Thọ Sơn", "Xã Đồng Nai", "Xã Đức Liễu", "Xã Đak Sao"];
        } else if($scope.district === 'Huyện Bù Đốp') {
            $scope.communes = ["Xã Thanh Bình", "Xã Thanh Hoà", "Xã Thanh Tân", "Xã Thanh Đức", "Xã Thanh Hưng", "Xã Thanh Lập", "Xã Thanh Mỹ", "Xã Thanh Phú", "Xã Thanh Quân"];
        } else if($scope.district === 'Huyện Bù Gia Mập') {
            $scope.communes = ["Xã Phước Minh", "Xã Phước Lập", "Xã Phước Long", "Xã Phước Bình", "Xã Phước Chơn", "Xã Phước Hòa", "Xã Phước Sơn", "Xã Phước Hiệp", "Xã Phước Thắng"];
        } else if($scope.district === 'Huyện Chơn Thành') {
            $scope.communes = ["Xã Thiện Hưng", "Xã Thiện Long", "Xã Thiện Mỹ", "Xã Thiện Thành", "Xã Thiện Thuật", "Xã Thiện Phước", "Xã Thiện Tân", "Xã Thiện Lâm"];
        } else if($scope.district === 'Huyện Đồng Phú') {
            $scope.communes = ["Xã Tân Hòa", "Xã Đồng Tâm", "Xã Tân Hưng", "Xã Tân Lập", "Xã Tân Lợi", "Xã Tân Phước", "Xã Tân Thanh", "Xã Tân Tiến"];
        } else if($scope.district === 'Huyện Hớn Quản') {
            $scope.communes = ["Xã Hớn Quản", "Xã Đồng Mỹ", "Xã Đồng Tiến", "Xã Đồng Phú", "Xã Đồng Tâm", "Xã Đồng Năm", "Xã Đồng Lạc", "Xã Đồng Thành"];
        } else if($scope.district === 'Huyện Lộc Ninh') {
            $scope.communes = ["Xã Lộc Hòa", "Xã Lộc An", "Xã Lộc Tấn", "Xã Lộc Thành", "Xã Lộc Hiệp", "Xã Lộc Thiện", "Xã Lộc Thuận", "Xã Lộc Quang"];
        } else if($scope.district === 'Huyện Phú Riềng') {
            $scope.communes = ["Xã Long Bình", "Xã Bình Sơn", "Xã Bình Tân", "Xã Bình Hòa", "Xã Bình Thành", "Xã Bình Đức", "Xã Phú Riềng"];
        } 
// binh thuan
        if($scope.district === 'Huyện Bắc Bình') {
            $scope.communes = ["Xã Chợ Lầu", "Xã Phan Điền", "Xã Hòa Thắng", "Xã Hòa Hiệp", "Xã Hòa Hội", "Xã Hòa Quang", "Xã Hòa An", "Xã Hòa Định", "Xã Hòa Thành", "Xã Hòa Đông", "Xã Hòa Bắc"];
        } else if($scope.district === 'Huyện Đức Linh') {
            $scope.communes =  ["Xã Đa Kai", "Xã Hà Ra", "Xã Mê Pu", "Xã Mê Đức", "Xã Mê Linh", "Xã Hương Phin", "Xã Đức Hạnh", "Xã Đông Hà", "Xã Đức Tân", "Xã Đức Phú", "Xã Đồng Kho", "Xã Sùng Nhơn"];
        } else if($scope.district === 'Huyện Hàm Tân') {
            $scope.communes = ["Xã Tân Lập", "Xã Tân Thành", "Xã Tân An", "Xã Tân Hiệp", "Xã Tân Hưng", "Xã Tân Xuân", "Xã Sông Phan", "Xã Hồng Liêm", "Xã Tân Phúc", "Xã Tân Đức"];
        } else if($scope.district === 'Huyện Hàm Thuận Bắc') {
            $scope.communes = ["Xã Thuận Hòa", "Xã Hàm Phú", "Xã Hàm Đức", "Xã Hàm Liêm", "Xã Hàm Chính", "Xã Hàm Hiệp", "Xã Hàm Thắng", "Xã Đa Mi", "Xã Hàm Minh", "Xã Hàm Vân", "Xã Hàm Cần"];
        } else if($scope.district === 'Huyện Hàm Thuận Nam') {
            $scope.communes =  ["Xã Thuận Nam", "Xã Mỹ Thạnh", "Xã Hàm Cần", "Xã Hàm Thạnh", "Xã Hàm Kiệm", "Xã Hàm Châu", "Xã Hàm Hiệp", "Xã Hàm Phước", "Xã Hàm Đức", "Xã Hàm Minh", "Xã Hàm Liêm"];
        } else if($scope.district === 'Huyện Phú Quí') {
            $scope.communes = ["Xã Long Hải", "Xã Ngũ Phụng", "Xã Tam Thanh", "Xã Nghĩa Long", "Xã Đại Hải", "Xã Thuận Quí"];
        } else if($scope.district === 'Huyện Tánh Linh') {
            $scope.communes =  ["Xã Bắc Ruộng", "Xã La Ngâu", "Xã Đồng Kho", "Xã Huy Khiêm", "Xã Đức Thuận", "Xã Đồng Tiến", "Xã Đức Phú", "Xã Gia An", "Xã Đức Bình", "Xã Phước Tân"];
        } else if($scope.district === 'Huyện Tuy Phong') {
            $scope.communes =  ["Xã Phan Rí Cửa", "Xã Phan Dũng", "Xã Phan Sơn", "Xã Phan Tiến", "Xã Phan Lâm", "Xã Bình An", "Xã Phan Hòa", "Xã Phan Hiệp", "Xã Phan Hải", "Xã Phan Thanh"];
        } 

// ca mau
        if($scope.district === 'Huyện Cái Nước') {
            $scope.communes = ["Xã Đông Hưng", "Xã Đông Thới", "Xã Tân Hưng", "Xã Tân Hưng Đông", "Xã Trần Thới", "Xã Tân Hưng Tây", "Xã Đông Hưng A", "Xã Tân Hưng Tây B"];
        } else if($scope.district === 'Huyện Đầm Dơi') {
            $scope.communes =  ["Xã Đầm Dơi", "Xã Tạ An Khương", "Xã Tạ An Khương  Đông", "Xã Tạ An Khương  Nam", "Xã Tân Dân", "Xã Tân Duyệt", "Xã Tân Đức", "Xã Tân Thuận", "Xã Tân Tiến"];
        } else if($scope.district === 'Huyện Năm Căn') {
            $scope.communes =  ["Xã Hàm Rồng", "Xã Hiệp Tùng", "Xã Đất Mới", "Xã Lâm Hải", "Xã Hàng Vịnh", "Xã Tam Giang", "Xã Tam Giang Đông", "Xã Đất Mũi"];
        } else if($scope.district === 'Huyện Ngọc Hiển') {
            $scope.communes =  ["Xã Tam Giang Tây", "Xã Tân Ân", "Xã Viên An", "Xã Nguyễn Việt Khái", "Xã Nguyễn Văn Thảnh", "Xã Ngọc Chánh", "Xã Ngọc Hiển", "Xã Ngọc Lâm", "Xã Ngọc Thuận"];
        } else if($scope.district === 'Huyện Phú Tân') {
            $scope.communes =  ["Xã Tân Hưng", "Xã Tân Thành", "Xã Tân Phước", "Xã Tân Thạnh", "Xã Tân Phú", "Xã Tân Hòa", "Xã Tân Hiệp", "Xã Tân Lợi", "Xã Tân Lập"];
        } else if($scope.district === 'Huyện Thới Bình') {
            $scope.communes =  ["Xã Thới Bình", "Xã Biển Bạch", "Xã Trí Phải", "Xã Trí Lực", "Xã Biển Bạch Đông", "Xã Thới Bình Quận 2", "Xã Trí Hải", "Xã Trí Hiệp"];
        } else if($scope.district === 'Huyện Trần Văn Thời') {
            $scope.communes =  ["Xã Thạnh Lộc", "Xã Thạnh Lợi", "Xã Thạnh Phú", "Xã An Hòa", "Xã Thạnh Quới", "Xã An Đức", "Xã Minh Lương", "Xã Thạnh Hải", "Xã Đại Ân"];
        } else if($scope.district === 'Huyện U Minh') {
            $scope.communes =  ["Xã Khánh An", "Xã Khánh Hòa", "Xã Khánh Hội", "Xã Khánh Lâm", "Xã Khánh Thuận", "Xã Khánh Tiến", "Xã Khánh Phú", "Xã Khánh Hưng"];
        } 

// cao bang
        if($scope.district === 'Huyện Bảo Lạc') {
            $scope.communes = ["Xã Thượng Hà", "Xã Ca Thành", "Xã Cô Ba", "Xã Bảo Toàn", "Xã Khánh Xuân", "Xã Xuân Trường", "Xã Hồng Trị", "Xã Kim Cúc", "Xã Phan Thanh", "Xã Hồng An", "Xã Hưng Đạo", "Xã Hưng Thịnh", "Xã Huy Giáp", "Xã Đình Phùng", "Xã Hồng Trung", "Xã Đào Ngạn", "Xã Thanh Nhật", "Xã Bảo Lạc", "Xã Cô Mười", "Xã Thượng Hà"];
        } else if($scope.district === 'Huyện Bảo Lâm') {
            $scope.communes = ["Xã Cốc Pàng", "Xã Thượng Hà", "Xã Cô Ba", "Xã Cô Nhi", "Xã Thông Nông", "Xã Bảo Lâm", "Xã Bảo Hà", "Xã Bảo Tân", "Xã Bình An", "Xã La Hiên", "Xã Xuân Trường", "Xã Hồng Trị", "Xã Hà Quang", "Xã Phan Thanh", "Xã Hồng An", "Xã Hưng Đạo", "Xã Hưng Thịnh", "Xã Huy Giáp", "Xã 4 Thắng", "Xã Đình Phùng"];
        } else if($scope.district === 'Huyện Hạ Lang') {
            $scope.communes =  ["Xã Minh Long", "Xã Thanh An", "Xã Thanh Bình", "Xã Thanh Châu", "Xã Thanh Đức", "Xã Thanh Hà", "Xã Thanh Hải", "Xã Thanh Hòa", "Xã Thanh Hồng", "Xã Thanh Khê", "Xã Thanh Lang", "Xã Thanh Lương", "Xã Thanh Lâm", "Xã Thanh Phong", "Xã Thanh Quang", "Xã Thanh Sơn", "Xã Thanh Thuỷ", "Xã Thanh Thủy", "Xã Thanh Tiên", "Xã Thanh Tùng", "Xã Thanh Tân", "Xã Thanh Vân"];
        } else if($scope.district === 'Huyện Hà Quảng') {
            $scope.communes =  ["Xã Cai Bộ", "Xã Cẩm Giàng", "Xã Chí Thảo", "Xã Đa Thông", "Xã Đồng Loan", "Xã Hà Thượng", "Xã Hương Lâm", "Xã Mỹ Thanh", "Xã Ngọc Động", "Xã Nhạn Môn", "Xã Quang Hán", "Xã Thắng Quân", "Xã Thổ Bình", "Xã Tân Lập", "Xã Vị Quang", "Xã Xuân Hoà", "Xã Yên Sơn"];
        } else if($scope.district === 'Huyện Hòa An') {
            $scope.communes =  ["Xã Đồng Văn", "Xã Đức Hồng", "Xã Huy Giáp", "Xã Kim Ngọc", "Xã Lăng Hiếu", "Xã Lăng Yên", "Xã Phong Châu", "Xã Phong Nậm", "Xã Phù Ngọc", "Xã Quảng Lâm", "Xã Quảng Minh", "Xã Thanh An", "Xã Thanh Bình", "Xã Thanh Châu", "Xã Thanh Đức", "Xã Thanh Hà", "Xã Thanh Hòa", "Xã Thanh Hồng", "Xã Thanh Khê", "Xã Thanh Lang", "Xã Thanh Lâm", "Xã Thanh Phong", "Xã Thanh Quang"];
        } else if($scope.district === 'Huyện Nguyên Bình') {
            $scope.communes =  ["Xã Thịnh Đức", "Xã Bình Long", "Xã Ca Thành", "Xã Cô Ngân", "Xã Độc Lập", "Xã Hưng Đạo", "Xã Kim Hỷ", "Xã Lạc Nông", "Xã Phi Hải", "Xã Thắng Lợi", "Xã Thanh Long", "Xã Trưng Nhị", "Xã Xuân Nội", "Xã Xuân Thủy", "Xã Yên Lạc"];
        } 
// dak lak
        if($scope.district === 'Huyện Buôn Đôn') {
            $scope.communes = ["Xã Ea Bar", "Xã Ea Huar", "Xã Ea Na", "Xã Ea Nuôl", "Xã Ea Wer", "Xã Krông Na", "Xã Tân Hoà", "Xã Cư Bông", "Xã Cư Elang", "Xã Cư Huê", "Xã Cư Ni", "Xã Cư Prông"];
        } else if($scope.district === 'Huyện Cư Kuin') {
            $scope.communes = ["Xã Ea Ktur", "Xã Ea Kênh", "Xã Ea Knốp", "Xã Ea Ô", "Xã Ea Tar", "Xã Ea Tul", "Xã Ea Đar"];
        } else if($scope.district === "Huyện Cư M'gar") {
            $scope.communes = ["Xã Ea Dăh", "Xã Ea H'Mlông", "Xã Ea Hiao", "Xã Ea Khal", "Xã Ea Nam", "Xã Ea Ral", "Xã Ea Sol", "Xã Ea Tir", "Xã Ea Wy", "Xã Ea Yiêng", "Xã Ea Yong"];
        } else if($scope.district === "Huyện Ea H'leo") {
            $scope.communes = ["Xã Cư Ê Wi", "Xã Ea Drông", "Xã Ea Hiao", "Xã Ea Khăl", "Xã Ea Nam", "Xã Ea Ral", "Xã Ea Sol", "Xã Ea Tir", "Xã Ea Wy", "Xã Ea Yiêng"];
        } else if($scope.district === 'Huyện Ea Kar') {
            $scope.communes =  ["Xã Cư Bông", "Xã Ea Đar", "Xã Ea Kar", "Xã Ea Kmút", "Xã Ea Knốp", "Xã Ea Ô", "Xã Ea Pốk", "Xã Ea Sar", "Xã Ea Sô", "Xã Ea Tih", "Xã Ea Trang", "Xã Ea Tu", "Xã Ea Wer"];
        } else if($scope.district === 'Huyện Ea Súp') {
            $scope.communes = ["Xã Cư KBang", "Xã Ea Bung", "Xã Ea Lê", "Xã Ea Rốk", "Xã Ea Săn", "Xã Ea Trul", "Xã Ea H'leo", "Xã Ea Ral", "Xã Ea Wy", "Xã Ea Yông"];
        } else if($scope.district === 'Huyện Krông Ana') {
            $scope.communes = ["Xã Buôn Trấp", "Xã Dray Sáp", "Xã Ea Na", "Xã Ea Huar", "Xã Ea Wer", "Xã Krông Búk", "Xã Krông Năng", "Xã Yang Mao"];
        } else if($scope.district === 'Huyện Krông Bông') {
            $scope.communes = ["Xã Cư Drăm", "Xã Cư KTy", "Xã Cư Pui", "Xã Ea Kly", "Xã Ea KNuec", "Xã Ea Kuăng", "Xã Ea Phê", "Xã Ea Uy", "Xã Hòa Lễ", "Xã Hòa Phong", "Xã Hòa Sơn", "Xã Hòa Tân"];
        }

// dak nong 
     if($scope.district === 'Huyện Đắk Glong') {
        $scope.communes = ["Xã Cư Dliê M'nông", "Xã Ea D'Rơng", "Xã Ea M' Doal", "Xã Ea Pil", "Xã Ea Riêng", "Xã Ea Trang", "Xã Krông Nô", "Xã Tâm Thắng"];
    } else if($scope.district === 'Huyện Đắk Mil') {
        $scope.communes = ["Xã Đắk Gằn", "Xã Đắk Lao", "Xã Đắk Long", "Xã Đắk Man", "Xã Đắk N'Drót", "Xã Đắk R'Măng", "Xã Đắk Sắk", "Xã Đức Mạnh", "Xã Long Đức"];
    }else if($scope.district === "Huyện Đắk R'Lấp") {
        $scope.communes = ["Xã Đắk Ru", "Xã Đắk Sin", "Xã Đắk Wer"];
    } else if($scope.district === 'Huyện Cư Kuin') {
        $scope.communes = ["Xã Ea Ktur", "Xã Ea Kênh", "Xã Ea Knốp", "Xã Ea Ô", "Xã Ea Tar", "Xã Ea Tul", "Xã Ea Đar"];
    } else if($scope.district === "Huyện Cư M'gar") {
        $scope.communes = ["Xã Ea Dăh", "Xã Ea H'Mlông", "Xã Ea Hiao", "Xã Ea Khal", "Xã Ea Nam", "Xã Ea Ral", "Xã Ea Sol", "Xã Ea Tir", "Xã Ea Wy", "Xã Ea Yiêng"];
    } else if($scope.district === "Huyện Ea H'leo") {
        $scope.communes = ["Xã Cư Ê Wi", "Xã Ea Drông", "Xã Ea Hiao", "Xã Ea Khăl", "Xã Ea Nam", "Xã Ea Ral", "Xã Ea Sol", "Xã Ea Tir", "Xã Ea Wy", "Xã Ea Yiêng"];
    } else if($scope.district === 'Huyện Ea Kar') {
        $scope.communes = ["Xã Cư Bông", "Xã Ea Đar", "Xã Ea Kar", "Xã Ea Kmút", "Xã Ea Knốp", "Xã Ea Ô", "Xã Ea Pốk", "Xã Ea Sar", "Xã Ea Sô", "Xã Ea Tih", "Xã Ea Trang", "Xã Ea Tu", "Xã Ea Wer"];
    } else if($scope.district === 'Huyện Ea Súp') {
        $scope.communes = ["Xã Cư KBang", "Xã Ea Bung", "Xã Ea Lê", "Xã Ea Rốk", "Xã Ea Săn", "Xã Ea Trul", "Xã Ea H'leo", "Xã Ea Ral", "Xã Ea Wy", "Xã Ea Yông"];
    } else if($scope.district === 'Huyện Krông Ana') {
        $scope.communes = ["Xã Buôn Trấp", "Xã Dray Sáp", "Xã Ea Na", "Xã Ea Huar", "Xã Ea Wer", "Xã Krông Búk", "Xã Krông Năng", "Xã Yang Mao"];
    } else if($scope.district === 'Huyện Cư Jút') {
        $scope.communes = ["Xã Cư Ê Wi", "Xã Ea Huar", "Xã Ea Ral", "Xã Ea Sol", "Xã Ea Tir", "Xã Ea Wy", "Xã Ea Yiêng", "Xã Ea Yông"];
    } 

        // hà nội
        if($scope.district === "Thị Xã Sơn Tây") {
            $scope.communes = ["Phường Trung Hưng", "Phường Sơn Lộc", "Phường Xuân Khanh", "Phường Đường Lâm", "Phường Viên Sơn", "Phường Xuân Sơn", "Phường Trung Sơn Trầm", "Phường Sơn Đông"];
        }else if ($scope.district === "Quận Ba Đình") {
            $scope.communes = ["Phường Phúc Xá ", "Phường Trúc Bạch", "Phường Vĩnh Phúc", "Phường Cống Vị", "Phường Liễu Giai", "Phường Nguyễn Trung Trực", "Kim Mã", "Phường Quán Thánh", "Phường Ngọc Hà", "Phường Điện Biên", "Phường Đội Cấn", "Phường Ngọc Khánh", "Phường Giảng Võ", "Phường Thành Công"];
        } else if($scope.district === "Quận Hoàn Kiếm") {
            $scope.communes = ["Phường Phúc Tân","Phường Đồng Xuân", "Phường Hàng Mã", "Phường Hàng Buồm", "Phường Hàng Đào", "Phường Hàng Bồ", "Phường Cửa Đông", "Phường Lý Thái Tổ", "Phường Hàng Bạc", "Phường Hàng Gai", "Phường Chương Dương", "Phường Hàng Trống", "Phường Cửa Nam", "Phường Hàng Bông", "Phường Tràng Tiền", "Phường Trần Hưng Đạo", "Phường Phan Chu Trinh", "Phường Hàng Bài"];
        } else if($scope.district === "Quận Tây Hồ") {
            $scope.communes = ["Phường Xuân La ", "Phường Yên Phụ", "Phường Bưởi", "Phường Thụy Khuê", "Phường Tứ Liên", "Phường Quảng An", "Phường Phú Thượng", "Phường Nhật Tân"];
        } else if($scope.district === "Quận Long Biên") {
            $scope.communes = ["Phường Bồ Đề ", "Phường Cự Khối", "Phường Đức Giang", "Phường Gia Thụy", "Phường Giang Biên", "Phường Ngọc Lâm", "Phường Ngọc Thụy", "Phường Phúc Đồng", "Phường Phúc Lợi", "Phường Sài Đồng", "Phường Thạch Bàn", "Phường Thượng Thanh", "Phường Việt Hưng"];
        } else if($scope.district === "Quận Cầu Giấy") {
            $scope.communes =["Phường Nghĩa Đô ", "Phường Quan Hoa", "Phường Dịch Vọng", "Phường Dịch Vọng Hậu", "Phường Trung Hòa", "Phường Nghĩa Tân", "Phường Yên Hòa", "Phường Mai Dịch"];

        } else if($scope.district === "Quận Đống Đa") {
            $scope.communes = ["Phường Cát Linh ", "Phường Văn Miếu", "Phường Quốc Tử Giám", "Phường Láng Thượng", "Phường Ô Chợ Dừa", "Phường Văn Chương", "Phường Hàng Bột", "Phường Láng Hạ", "Phường Khâm Thiên", "Phường Thổ Quan", "Phường Nam Đồng", "Phường Trung Liệt", "Phường Phương Liên", "Phường Thịnh Quang", "Phường Trung Phụng", "Phường Kim Liên", "Phường Phương Mai", "Phường Ngã Tư Sở", "Phường Khương Thượng", "Phường Nguyễn Du"];

        } else if($scope.district === "Quận Hai Bà Trưng") {
            $scope.communes = ["Phường Bách Khoa ", "Phường Lê Đại Hành", "Phường Đồng Nhân", "Phường Đồng Tâm", "Phường Vĩnh Tuy", "Phường Bạch Đằng", "Phường Bạch Mai", "Phường Quỳnh Lôi", "Phường Minh Khai", "Phường Trương Định", "Phường Thanh Lương"];

        } else if($scope.district === "Quận Hoàng Mai") {
            $scope.communes = ["Phường Trương Định ", "Phường Hoàng Văn Thụ", "Phường Thanh Trì", "Phường Vĩnh Hưng", "Phường Ô Chợ Dừa", "Phường Định Công", "Phường Mai Động", "Phường Tân Mai", "Phường Tương Mai", "Phường Đại Kim", "Phường Thịnh Liệt", "Phường  Hoàng Liệt", "Phường Yên Sở", "Phường Thanh Xuân Bắc", "Phường Thanh Xuân Nam"];

        } else if($scope.district === "Quận Thanh Xuân") {
            $scope.communes = ["Phường Nhân Chính ", "Phường Thượng Đình", "Phường Khương Trung", "Phường Khương Mai", "Phường Thanh Xuân Trung", "Phường Phương Liệt", "Phường Hạ Đình", "Phường Khương Đình", "Phường Thanh Xuân Bắc", "Phường Thanh Xuân Nam"];

        } else if($scope.district === "Huyện Sóc Sơn") {
            $scope.communes = ["Thị trấn Sóc Sơn ", "Xã Minh Trí", "Xã Hồng Kỳ", "Xã Nam Sơn", "Xã Trung Giã", "Xã Tân Hưng", "Xã Minh Phú", "Xã Phù Linh", "Xã Bắc Sơn", "Xã Đông Xuân", "Xã Phú Cường", "Xã Phú Minh", "Xã Phù Lỗ", "Xã Xuân Giang", "Xã Mai Đình", "Xã Đức Hoà", "Xã Thanh Xuân", "Xã Kim Lũ", "Xã Phú Đông", "Xã Phú Túc"];

        } else if($scope.district === "Huyện Đông Anh") {
            $scope.communes = ["Thị trấn Đông Anh ", "Xã Xuân Nộn", "Xã Thuỵ Lâm", "Xã Bắc Hồng", "Xã Nguyên Khê", "Xã Nam Hồng", "Xã Tiên Dương", "Xã Vân Hà", "Xã Uy Nỗ", "Xã Vân Nội", "Xã Liên Hà", "Xã Việt Hùng", "Xã Kim Chung", "Xã Dục Tú", "Xã Minh Phú", "Xã Võng La"];

        } else if($scope.district === "Huyện Gia Lâm") {
            $scope.communes = ["Thị trấn Yên Viên ", "Xã Yên Thường", "Xã Yên Viên", "Xã Ninh Hiệp", "Xã Đình Xuyên", "Xã Dương Hà", "Xã Phù Đổng", "Xã Trung Mầu", "Xã Lệ Chi", "Xã Cổ Bi", "Xã Đặng Xá", "Xã Phú Thị", "Xã Trung Giã", "Xã Thuỵ Phương", "Xã Kiêu Kỵ"];

        } else if($scope.district === "Quận Nam Từ Liêm") {
            $scope.communes = ["Phường Mỹ Đình 1 ", "Phường Mỹ Đình 2", "Phường Tây Mỗ", "Phường Mễ Trì", "Phường Phương Canh", "Phường Phương Mai", "Phường Xuân Phương", "Phường Đại Mỗ", "Phường Trung Văn"];

        } else if($scope.district === "Huyện Thanh Trì") {
            $scope.communes = ["Xã Văn Điển ", "Xã Tân Triều", "Xã Thanh Liệt", "Xã Tả Thanh Oai", "Xã Đình Xuyên", "Xã Hữu Hoà", "Xã Tam Hiệp", "Xã Tam Thuận", "Xã Hòa Bình", "Xã Đông Mỹ", "Xã Liên Ninh", "Xã Đại Áng"];

        } else if($scope.district === "Quận Bắc Từ Liêm") {
            $scope.communes = ["Phường Thượng Cát", "Phường Liên Mạc", "Phường Đông Ngạc", "Phường Đức Thắng", "Phường Thụy Phương", "Phường Tây Tựu", "Phường Xuân Đỉnh", "Phường Xuân Tảo", "Phường Minh Khai", "Phường Cổ Nhuế 1", "Phường Cổ Nhuế 2", "Phường Phú Diễn"];

        } else if($scope.district === "Huyện Mê Linh") {
            $scope.communes = ["Thị trấn Chi Đông", "Xã Quang Minh", "Xã Thạch Đà", "Xã Tiến Thắng", "Xã Tiến Thịnh", "Xã Tiền Phong", "Xã Tiền Tiến", "Xã Tráng Việt", "Xã Tự Lập", "Xã Vạn Yên", "Xã Văn Khê", "Xã Văn Võ"];

        } else if($scope.district === "Quận Hà Đông") {
            $scope.communes = ["Phường Nguyễn Trãi", "Phường Văn Quán", "Phường Vạn Phúc", "Phường Hà Cầu", "Phường Yết Kiêu", "Phường Quang Trung", "Phường La Khê", "Phường Phú La", "Phường Phú Lãm", "Phường Dương Nội", "Phường Kiến Hưng", "Phường Mộ Lao", "Phường Hà Đông", "Phường Văn Khê"];

        } else if($scope.district === "Huyện Ba Vì") {
            $scope.communes = ["Thị trấn Tây Đằng", "Xã Ba Trại", "Xã Ba Vì", "Xã Cẩm Lĩnh", "Xã Cam Thượng", "Xã Châu Sơn", "Xã Minh Quang", "Xã Minh Tiến", "Xã Phong Vân", "Xã Phú Châu", "Xã Phú Cường", "Xã Phú Đông", "Xã Phú Phương", "Xã Phú Thịnh", "Xã Tản Hồng", "Xã Tản Lĩnh", "Xã Tây Đằng", "Xã Thuần Mỹ", "Xã Thụy An", "Xã Tiên Phong", "Xã Tòng Bạt", "Xã Vạn Thắng", "Xã Vật Lại", "Xã Yên Bài"];

        } else if($scope.district === "Huyện Phúc Thọ") {
            $scope.communes = ["Xã Phúc Thọ", "Xã Vân Hà", "Xã Vân Phúc", "Xã Vân Nam", "Xã Xuân Phú", "Xã Sen Phương", "Xã Phương Độ", "Xã Phượng Vĩ", "Xã Đông Cửu", "Xã Thọ Lộc", "Xã Thượng Cốc", "Xã Hát Môn", "Xã Phúc Hòa", "Xã Ngọc Tảo", "Xã Phụng Thượng"];

        } else if($scope.district === "Huyện Đan Phượng" ) {
            $scope.communes = ["Xã Đan Phượng", "Xã Mai Lâm", "Xã Hạ Mỗ", "Xã Liên Trung", "Xã Thọ An", "Xã Song Phượng", "Xã Trung Châu", "Xã Tân Hội", "Xã Đồng Tháp", "Xã Đan Phượng"];

        } else if($scope.district === "Huyện Hoài Đức") {
            $scope.communes = ["Xã Trạm Trôi", "Xã Đức Thượng", "Xã Minh Khai", "Xã Đức Giang", "Xã Thượng Cát", "Xã Lại Yên", "Xã Tiền Yên", "Xã Song Phương", "Xã An Khánh", "Xã An Thượng", "Xã Vân Canh", "Xã La Phù", "Xã Đông La"];

        } else if($scope.district === "Huyện Quốc Oai" ) {
            $scope.communes = ["Xã Quốc Oai", "Xã Sài Sơn", "Xã Phượng Cách", "Xã Yên Sơn", "Xã Ngọc Liệp", "Xã Liệp Tuyết", "Xã Thạch Thán", "Xã Đồng Quang", "Xã Phú Cát", "Xã Tuyết Nghĩa"];

        } else if($scope.district === "Huyện Thạch Thất") {
            $scope.communes = ["Xã Liên Quan", "Xã Đại Đồng", "Xã Kim Quan", "Xã Cần Kiệm", "Xã Bình Yên", "Xã Chàng Sơn", "Xã Thạch Hòa", "Xã Đồng Trúc", "Xã Yên Trung", "Xã Yên Bình", "Xã Tiến Xuân", "Xã Hữu Bằng", "Xã Tiến Thắng"];

        } else if($scope.district === "Huyện Chương Mỹ") {
            $scope.communes = ["Xã Chúc Sơn", "Xã Xuân Mai", "Xã Phụng Châu", "Xã Tiên Phương", "Xã Đông Sơn", "Xã Đông Phương Yên", "Xã Trường Yên", "Xã Ngọc Hòa", "Xã Thủy Xuân Tiên", "Xã Thanh Bình", "Xã Trung Hòa", "Xã Ngọc Hòa", "Xã Đại Yên", "Xã Thụy Hương", "Xã Tốt Động", "Xã Hữu Văn", "Xã Mỹ Lương", "Xã Thượng Vực", "Xã Hồng Phong", "Xã Đồng Phú", "Xã Trung Tú", "Xã Đồng Lạc", "Xã Phú Nam An"];

        } else if($scope.district === "Huyện Thanh Oai" ) {
            $scope.communes = ["Xã Kim An", "Xã Kim Thư", "Xã Cự Khê", "Xã Thanh Cao", "Xã Bích Hòa", "Xã Hồng Dương", "Xã Liên Châu", "Xã Đỗ Động", "Xã Đồng Bát", "Xã Hương Cần", "Xã Đông La", "Xã Hồng Quang", "Xã Liên Vị", "Xã Đông Xuân", "Xã Nam Phương Tiến", "Xã Cát Quế", "Xã Tiến Thắng", "Xã Hữu Bằng"];

        } else if($scope.district === "Huyện Thường Tín") {
            $scope.communes = ["Xã Thường Tín", "Xã Ninh Sở", "Xã Nhị Khê", "Xã Duyên Thái", "Xã Khánh Hà", "Xã Hòa Bình", "Xã Văn Bình", "Xã Hiền Giang", "Xã Hồng Vân", "Xã Vân Tảo", "Xã Liên Phương", "Xã Văn Phú", "Xã Tự Nhiên", "Xã Tiền Phong", "Xã Hà Hồi", "Xã Thư Phú", "Xã Nguyễn Trãi"];

        } else if($scope.district === "Huyện Phú Xuyên" ) {
            $scope.communes = ["Xã Phú Minh", "Xã Phú Xuyên", "Xã Hồng Minh", "Xã Phượng Đức", "Xã Văn Nhân", "Xã Văn Hoàng", "Xã Quang Trung", "Xã Nam Tiến", "Xã Nam Phong", "Xã Đại Thắng", "Xã Đại Xuyên", "Xã Minh Tân", "Xã Sơn Hà", "Xã Chuyên Mỹ", "Xã Khai Thái", "Xã Trí Trung", "Xã Phú Túc", "Xã Vân Từ", "Xã Trí Thủy", "Xã Đa Tốn", "Xã Hồng Thái"];

        } else if($scope.district === "Huyện Ứng Hòa") {
            $scope.communes = ["Xã Trường Thịnh", "Xã Cao Thành", "Xã Hòa Lâm", "Xã Viên An", "Xã Đồng Tiến", "Xã Phương Tú", "Xã Trung Tú", "Xã Đan Phượng", "Xã Thanh Vân", "Xã Phương Trung", "Xã Liên Hiệp", "Xã Đan Hội", "Xã Đông Lỗ", "Xã Đại Hùng", "Xã Đại Cường", "Xã Phù Lưu", "Xã Hữu Bằng", "Xã Tảo Dương Văn", "Xã Tam Hòa"];

        } else if($scope.district === "Huyện Mỹ Đức") {
            $scope.communes = ["Xã Đại Nghĩa", "Xã Đồng Tâm", "Xã Đốc Tín", "Xã Hồng Sơn", "Xã Hợp Thành", "Xã Hợp Tiến", "Xã Hùng Tiến", "Xã Lê Thành", "Xã Mỹ Thanh", "Xã Phúc Lâm", "Xã Phúc Lễ", "Xã Phúc Thọ", "Xã Phụng Thượng", "Xã Thượng Lâm", "Xã Tuy Lai", "Xã Vạn Kim", "Xã Xuân Khánh", "Xã Xuân Mai", "Xã Tam Hòa", "Xã Đại sáng"];

        }
    };
});