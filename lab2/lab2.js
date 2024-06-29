function diachi() {
// Ha Noi    
    var quanHN = ["Quận/huyện","Quận Ba Đình", "Quận Hoàn Kiếm", "Quận Tây Hồ", "Quận Long Biên", "Quận Cầu Giấy", "Quận Đống Đa", "Quận Hai Bà Trưng", "Quận Hoàng Mai", "Quận Thanh Xuân", "Huyện Sóc Sơn", "Huyện Đông Anh", "Huyện Gia Lâm", "Quận Nam Từ Liêm", "Huyện Thanh Trì", "Quận Bắc Từ Liêm", "Huyện Mê Linh", "Quận Hà Đông", "Thị Xã Sơn Tây", "Huyện Ba Vì", "Huyện Phúc Thọ", "Huyện Đan Phượng", "Huyện Hoài Đức", "Huyện Quốc Oai", "Huyện Thạch Thất", "Huyện Chương Mỹ", "Huyện Thanh Oai", "Huyện Thường Tín", "Huyện Phú Xuyên", "Huyện Ứng Hòa", "Huyện Mỹ Đức"];
    var phuongXaHN  = {
        "Quận Ba Đình": ["Phường/Xã", "Phường Phúc Xá ", "Phường Trúc Bạch", "Phường Vĩnh Phúc", "Phường Cống Vị", "Phường Liễu Giai", "Phường Nguyễn Trung Trực", "Kim Mã", "Phường Quán Thánh", "Phường Ngọc Hà", "Phường Điện Biên", "Phường Đội Cấn", "Phường Ngọc Khánh", "Kim Mã", "Phường Giảng Võ", "Phường Thành Công"],
        "Quận Hoàn Kiếm": ["Phường/Xã","Phường Phúc Tân","Phường Đồng Xuân", "Phường Hàng Mã", "Phường Hàng Buồm", "Phường Hàng Đào", "Phường Hàng Bồ", "Phường Cửa Đông", "Phường Lý Thái Tổ", "Phường Hàng Bạc", "Phường Hàng Gai", "Phường Chương Dương", "Phường Hàng Trống", "Phường Cửa Nam", "Phường Hàng Bông", "Phường Tràng Tiền", "Phường Trần Hưng Đạo", "Phường Phan Chu Trinh", "Phường Hàng Bài"],
        "Quận Tây Hồ": ["Phường/Xã", "Phường Xuân La ", "Phường Yên Phụ", "Phường Bưởi", "Phường Thụy Khuê", "Phường Tứ Liên", "Phường Quảng An", "Phường Phú Thượng", "Phường Nhật Tân"],
        "Quận Long Biên": ["Phường/Xã", "Phường Bồ Đề ", "Phường Cự Khối", "Phường Đức Giang", "Phường Gia Thụy", "Phường Giang Biên", "Phường Ngọc Lâm", "Phường Ngọc Thụy", "Phường Phúc Đồng", "Phường Phúc Lợi", "Phường Sài Đồng", "Phường Thạch Bàn", "Phường Thượng Thanh", "Phường Việt Hưng"],
        "Quận Cầu Giấy": ["Phường/Xã", "Phường Nghĩa Đô ", "Phường Quan Hoa", "Phường Dịch Vọng", "Phường Dịch Vọng Hậu", "Phường Trung Hòa", "Phường Nghĩa Tân", "Phường Yên Hòa", "Phường Mai Dịch"],
        "Quận Đống Đa": ["Phường/Xã", "Phường Cát Linh ", "Phường Văn Miếu", "Phường Quốc Tử Giám", "Phường Láng Thượng", "Phường Ô Chợ Dừa", "Phường Văn Chương", "Phường Hàng Bột", "Phường Láng Hạ", "Phường Khâm Thiên", "Phường Thổ Quan", "Phường Nam Đồng", "Phường Trung Liệt", "Phường Phương Liên", "Phường Thịnh Quang", "Phường Trung Phụng", "Phường Kim Liên", "Phường Phương Mai", "Phường Ngã Tư Sở", "Phường Khương Thượng", "Phường Nguyễn Du"],
        "Quận Hai Bà Trưng": ["Phường/Xã", "Phường Bách Khoa ", "Phường Lê Đại Hành", "Phường Đồng Nhân", "Phường Đồng Tâm", "Phường Vĩnh Tuy", "Phường Bạch Đằng", "Phường Bạch Mai", "Phường Quỳnh Lôi", "Phường Minh Khai", "Phường Trương Định", "Phường Thanh Lương"],
        "Quận Hoàng Mai": ["Phường/Xã", "Phường Trương Định ", "Phường Hoàng Văn Thụ", "Phường Thanh Trì", "Phường Vĩnh Hưng", "Phường Ô Chợ Dừa", "Phường Định Công", "Phường Mai Động", "Phường Tân Mai", "Phường Tương Mai", "Phường Đại Kim", "Phường Thịnh Liệt", "Phường  Hoàng Liệt", "Phường Yên Sở", "Phường Thanh Xuân Bắc", "Phường Thanh Xuân Nam"],
        "Quận Thanh Xuân": ["Phường/Xã", "Phường Nhân Chính ", "Phường Thượng Đình", "Phường Khương Trung", "Phường Khương Mai", "Phường Thanh Xuân Trung", "Phường Phương Liệt", "Phường Hạ Đình", "Phường Khương Đình", "Phường Thanh Xuân Bắc", "Phường Thanh Xuân Nam"],
        "Huyện Sóc Sơn": ["Phường/Xã", "Thị trấn Sóc Sơn ", "Xã Minh Trí", "Xã Hồng Kỳ", "Xã Nam Sơn", "Xã Trung Giã", "Xã Tân Hưng", "Xã Minh Phú", "Xã Phù Linh", "Xã Bắc Sơn", "Xã Đông Xuân", "Xã Phú Cường", "Xã Phú Minh", "Xã Phù Lỗ", "Xã Xuân Giang", "Xã Mai Đình", "Xã Đức Hoà", "Xã Thanh Xuân", "Xã Kim Lũ", "Xã Phú Đông", "Xã Phú Túc"],
        "Huyện Đông Anh": ["Phường/Xã", "Thị trấn Đông Anh ", "Xã Xuân Nộn", "Xã Thuỵ Lâm", "Xã Bắc Hồng", "Xã Nguyên Khê", "Xã Nam Hồng", "Xã Tiên Dương", "Xã Vân Hà", "Xã Uy Nỗ", "Xã Vân Nội", "Xã Liên Hà", "Xã Việt Hùng", "Xã Kim Chung", "Xã Dục Tú", "Xã Minh Phú", "Xã Võng La"],
        "Huyện Gia Lâm": ["Phường/Xã", "Thị trấn Yên Viên ", "Xã Yên Thường", "Xã Yên Viên", "Xã Ninh Hiệp", "Xã Đình Xuyên", "Xã Dương Hà", "Xã Phù Đổng", "Xã Trung Mầu", "Xã Lệ Chi", "Xã Cổ Bi", "Xã Đặng Xá", "Xã Phú Thị", "Xã Trung Giã", "Xã Thuỵ Phương", "Xã Kiêu Kỵ"],
        "Quận Nam Từ Liêm": ["Phường/Xã", "Phường Mỹ Đình 1 ", "Phường Mỹ Đình 2", "Phường Tây Mỗ", "Phường Mễ Trì", "Phường Phương Canh", "Phường Phương Mai", "Phường Xuân Phương", "Phường Đại Mỗ", "Phường Trung Văn"],
        "Huyện Thanh Trì": ["Phường/Xã", "Xã Văn Điển ", "Xã Tân Triều", "Xã Thanh Liệt", "Xã Tả Thanh Oai", "Xã Đình Xuyên", "Xã Hữu Hoà", "Xã Tam Hiệp", "Xã Tam Thuận", "Xã Hòa Bình", "Xã Đông Mỹ", "Xã Liên Ninh", "Xã Đại Áng"],
        "Quận Bắc Từ Liêm": ["Phường/Xã", "Phường Thượng Cát", "Phường Liên Mạc", "Phường Đông Ngạc", "Phường Đức Thắng", "Phường Thụy Phương", "Phường Tây Tựu", "Phường Xuân Đỉnh", "Phường Xuân Tảo", "Phường Minh Khai", "Phường Cổ Nhuế 1", "Phường Cổ Nhuế 2", "Phường Phú Diễn"],
        "Huyện Mê Linh": ["Phường/Xã", "Thị trấn Chi Đông", "Xã Quang Minh", "Xã Thạch Đà", "Xã Tiến Thắng", "Xã Tiến Thịnh", "Xã Tiền Phong", "Xã Tiền Tiến", "Xã Tráng Việt", "Xã Tự Lập", "Xã Vạn Yên", "Xã Văn Khê", "Xã Văn Võ"],
        "Quận Hà Đông": ["Phường/Xã", "Phường Nguyễn Trãi", "Phường Văn Quán", "Phường Vạn Phúc", "Phường Hà Cầu", "Phường Yết Kiêu", "Phường Quang Trung", "Phường La Khê", "Phường Phú La", "Phường Phú Lãm", "Phường Dương Nội", "Phường Kiến Hưng", "Phường Mộ Lao", "Phường Hà Đông", "Phường Văn Khê"],
        "Thị xã Sơn Tây": ["Phường/Xã", "Phường Trung Hưng", "Phường Sơn Lộc", "Phường Xuân Khanh", "Phường Đường Lâm", "Phường Viên Sơn", "Phường Xuân Sơn", "Phường Trung Sơn Trầm", "Phường Sơn Đông"],
        "Huyện Ba Vì": ["Phường/Xã", "Thị trấn Tây Đằng", "Xã Ba Trại", "Xã Ba Vì", "Xã Cẩm Lĩnh", "Xã Cam Thượng", "Xã Châu Sơn", "Xã Minh Quang", "Xã Minh Tiến", "Xã Phong Vân", "Xã Phú Châu", "Xã Phú Cường", "Xã Phú Đông", "Xã Phú Phương", "Xã Phú Thịnh", "Xã Tản Hồng", "Xã Tản Lĩnh", "Xã Tây Đằng", "Xã Thuần Mỹ", "Xã Thụy An", "Xã Tiên Phong", "Xã Tòng Bạt", "Xã Vạn Thắng", "Xã Vật Lại", "Xã Yên Bài"],
        "Huyện Phúc Thọ": ["Phường/Xã", "Xã Phúc Thọ", "Xã Vân Hà", "Xã Vân Phúc", "Xã Vân Nam", "Xã Xuân Phú", "Xã Sen Phương", "Xã Phương Độ", "Xã Phượng Vĩ", "Xã Đông Cửu", "Xã Thọ Lộc", "Xã Thượng Cốc", "Xã Hát Môn", "Xã Phúc Hòa", "Xã Ngọc Tảo", "Xã Phụng Thượng"],
        "Huyện Đan Phượng": ["Phường/Xã", "Xã Đan Phượng", "Xã Mai Lâm", "Xã Hạ Mỗ", "Xã Liên Trung", "Xã Thọ An", "Xã Song Phượng", "Xã Trung Châu", "Xã Tân Hội", "Xã Đồng Tháp", "Xã Đan Phượng"],
        "Huyện Hoài Đức": ["Phường/Xã", "Xã Trạm Trôi", "Xã Đức Thượng", "Xã Minh Khai", "Xã Đức Giang", "Xã Thượng Cát", "Xã Lại Yên", "Xã Tiền Yên", "Xã Song Phương", "Xã An Khánh", "Xã An Thượng", "Xã Vân Canh", "Xã La Phù", "Xã Đông La"],
        "Huyện Quốc Oai": ["Phường/Xã", "Xã Quốc Oai", "Xã Sài Sơn", "Xã Phượng Cách", "Xã Yên Sơn", "Xã Ngọc Liệp", "Xã Liệp Tuyết", "Xã Thạch Thán", "Xã Đồng Quang", "Xã Phú Cát", "Xã Tuyết Nghĩa"],
        "Huyện Thạch Thất": ["Phường/Xã", "Xã Liên Quan", "Xã Đại Đồng", "Xã Kim Quan", "Xã Cần Kiệm", "Xã Bình Yên", "Xã Chàng Sơn", "Xã Thạch Hòa", "Xã Đồng Trúc", "Xã Yên Trung", "Xã Yên Bình", "Xã Tiến Xuân", "Xã Hữu Bằng", "Xã Tiến Thắng"],
        "Huyện Chương Mỹ": ["Phường/Xã", "Xã Chúc Sơn", "Xã Xuân Mai", "Xã Phụng Châu", "Xã Tiên Phương", "Xã Đông Sơn", "Xã Đông Phương Yên", "Xã Trường Yên", "Xã Ngọc Hòa", "Xã Thủy Xuân Tiên", "Xã Thanh Bình", "Xã Trung Hòa", "Xã Ngọc Hòa", "Xã Đại Yên", "Xã Thụy Hương", "Xã Tốt Động", "Xã Hữu Văn", "Xã Mỹ Lương", "Xã Thượng Vực", "Xã Hồng Phong", "Xã Đồng Phú", "Xã Trung Tú", "Xã Đồng Lạc", "Xã Phú Nam An"],
        "Huyện Thanh Oai": ["Phường/Xã", "Xã Kim An", "Xã Kim Thư", "Xã Cự Khê", "Xã Thanh Cao", "Xã Bích Hòa", "Xã Hồng Dương", "Xã Liên Châu", "Xã Đỗ Động", "Xã Đồng Bát", "Xã Hương Cần", "Xã Đông La", "Xã Hồng Quang", "Xã Liên Vị", "Xã Đông Xuân", "Xã Nam Phương Tiến", "Xã Cát Quế", "Xã Tiến Thắng", "Xã Hữu Bằng"],
        "Huyện Thường Tín": ["Phường/Xã", "Xã Thường Tín", "Xã Ninh Sở", "Xã Nhị Khê", "Xã Duyên Thái", "Xã Khánh Hà", "Xã Hòa Bình", "Xã Văn Bình", "Xã Hiền Giang", "Xã Hồng Vân", "Xã Vân Tảo", "Xã Liên Phương", "Xã Văn Phú", "Xã Tự Nhiên", "Xã Tiền Phong", "Xã Hà Hồi", "Xã Thư Phú", "Xã Nguyễn Trãi"],
        "Huyện Phú Xuyên": ["Phường/Xã", "Xã Phú Minh", "Xã Phú Xuyên", "Xã Hồng Minh", "Xã Phượng Đức", "Xã Văn Nhân", "Xã Văn Hoàng", "Xã Quang Trung", "Xã Nam Tiến", "Xã Nam Phong", "Xã Đại Thắng", "Xã Đại Xuyên", "Xã Minh Tân", "Xã Sơn Hà", "Xã Chuyên Mỹ", "Xã Khai Thái", "Xã Trí Trung", "Xã Phú Túc", "Xã Vân Từ", "Xã Trí Thủy", "Xã Đa Tốn", "Xã Hồng Thái"],
        "Huyện Ứng Hòa": ["Phường/Xã", "Xã Trường Thịnh", "Xã Cao Thành", "Xã Hòa Lâm", "Xã Viên An", "Xã Đồng Tiến", "Xã Phương Tú", "Xã Trung Tú", "Xã Đan Phượng", "Xã Thanh Vân", "Xã Phương Trung", "Xã Liên Hiệp", "Xã Đan Hội", "Xã Đông Lỗ", "Xã Đại Hùng", "Xã Đại Cường", "Xã Phù Lưu", "Xã Hữu Bằng", "Xã Tảo Dương Văn", "Xã Tam Hòa", "Xã Đông Lỗ", "Xã Trung Tú"],
        "Huyện Mỹ Đức": ["Phường/Xã", "Xã Đại Nghĩa", "Xã Đồng Tâm", "Xã Đốc Tín", "Xã Hồng Sơn", "Xã Hợp Thành", "Xã Hợp Tiến", "Xã Hùng Tiến", "Xã Lê Thành", "Xã Mỹ Thanh", "Xã Phúc Lâm", "Xã Phúc Lễ", "Xã Phúc Thọ", "Xã Phụng Thượng", "Xã Thượng Lâm", "Xã Tuy Lai", "Xã Vạn Kim", "Xã Xuân Khánh", "Xã Xuân Mai", "Xã Tam Hòa", "Xã Đại sáng"],
    };

// Ha Giang
    var huyenHaGiang = ["Quận/huyện","Huyện Đồng Văn","Huyện Mèo Vạc","Huyện Yên Minh","Huyện Quản Bạ","Huyện Vị Xuyên","Huyện Bắc Mê","Huyện Hoàng Su Phì","Huyện Xín Mần","Huyện Bắc Quang","Huyện Quang Bình"];
    var phuongXaHaGiang = {
        "Huyện Đồng Văn": ["Phường/Xã","Xã Phó Bảng","Xã Lũng Cú","Xã Má Lé","Xã Đồng Văn","Xã Lũng Táo","Xã Phố Là","Xã Thài Phìn Tủng","Xã Sủng Là","Xã Xà Phìn","Xã Tả Phìn","Xã Tả Lủng","Xã Phố Cáo","Xã Sính Lủng","Xã Sảng Tủng","Xã Lũng Thầu","Xã Sủng Trái","Xã Sủng Máng","Xã Phìn Hồ","Xã Si Ma Cai","Xã Sảng Ma Sáo","Xã Sính Phình","Xã Sảng Con","Xã Sủng Thài","Xã Sảng Bằng","Xã Sảng Định","Xã Phú Vinh","Xã Lũng Phìn","Xã Sủng Lùng","Xã Sủng Pù","Xã Sủng Trà","Xã Lũng Hồ","Xã Sính Lùng","Xã Sính Lung","Xã Phố Lồ","Xã Tả Phìn","Xã Sảng Tả","Xã Sính Cú","Xã Sảng Lủng"],
        "Huyện Mèo Vạc": ["Phường/Xã",'Xã Thượng Phùng','Xã Pải Lủng','Xã Sủng Trà','Xã Đông Phú','Xã Lũng Chinh','Xã Tả Lủng','Xã Tả Phìn','Xã Sơn Vĩ','Xã Mèo Vạc','Xã Khâu Vai'],
        "Huyện Yên Minh": ["Phường/Xã",'Thị trấn Yên Minh','Xã Thắng Mố','Xã Phú Lũng','Xã Sủng Trái','Xã Mậu Duệ','Xã Lao Và Chải','Xã Mả Lủng','Xã Ngam La','Xã Đông Minh','Xã Mậu Long','Xã Đường Thượng','Xã Lũng Hồ','Xã Du Tiến','Xã Du Già','Xã Hữu Vinh','Xã Mậu Sơn','Xã Minh Tân','Xã Mậu Lâm','Xã Yên Thành','Xã Phúc Lợi'],
        "Huyện Quản Bạ": ["Phường/Xã",'Thị trấn Tam Sơn','Xã Bát Đại Sơn','Xã Nghĩa Thuận','Xã Cán Tỷ','Xã Cao Mã Pờ','Xã Đông Hà','Xã Quản Bạ','Xã Lùng Tám','Xã Quyết Tiến','Xã Tả Ván','Xã Thái An','Xã Bản Rịa','Xã Nghĩa Tâm','Xã Tùng Vài','Xã Đông Hà','Xã Quyết Thắng','Xã Tả Sử Choóng','Xã Tân Tiến','Xã Lùng Tám','Xã Lùng Nàng','Xã Thanh Vân','Xã Quản Bạ','Xã Quản Bạ','Xã Quản Bạ','Xã Nghĩa Thuận','Xã Lùng Tám','Xã Cán Tỷ','Xã Cao Mã Pờ','Xã Đông Hà','Xã Quản Bạ','Xã Quản Bạ','Xã Tả Ván','Xã Thái An','Xã Bản Rịa','Xã Nghĩa Tâm','Xã Tùng Vài','Xã Đông Hà','Xã Quyết Thắng','Xã Tả Sử Choóng','Xã Tân Tiến','Xã Lùng Tám','Xã Lùng Nàng','Xã Thanh Vân','Xã Quản Bạ'],
        "Huyện Vị Xuyên": ["Phường/Xã",'Thị trấn Vị Xuyên','Xã Keng Đu','Xã Mậu Duệ','Xã Phăng Sô Lin','Xã Thượng Sơn','Xã Cao Bồ','Xã Đạo Đức','Xã Thanh Đức','Xã Việt Đức','Xã Minh Tân','Xã Thuận Hoà','Xã Tùng Vài','Xã Lao Chải','Xã Quảng Ngần','Xã Nậm Dịch','Xã Thanh Xuân','Xã Thanh Thủy','Xã Thanh Sơn','Xã Nậm Tỵ','Xã Bạch Ngọc','Xã Trung Thành','Xã Đông Thành','Xã Phong Quang','Xã Xuân Minh',],
        "Huyện Bắc Mê": ["Phường/Xã",'Xã Yên Phú','Xã Xuân Minh','Xã Tiên Nguyên','Xã Tân Nam','Xã Quang Minh','Xã Phú Minh','Xã Minh Long','Xã Hữu Lân','Xã Đông Minh','Xã Đường Âm','Xã Cao Minh','Xã Bảo Minh','Xã An Lạc',],
        "Huyện Hoàng Su Phì": ["Phường/Xã",'Thị trấn Vinh Quang','Xã Tân Quang','Xã Thông Nguyên','Xã Thượng Thôn','Xã Phúc Sơn','Xã Thắng Mỹ','Xã Phương Tiến','Xã Lũng Nặm','Xã Cao Sơn','Xã Lũng Cú','Xã Tụ Nhân','Xã Nàng Đôn','Xã Nậm Dịch','Xã Pố Lồ','Xã Bản Luốc','Xã Sán Xả Hồ','Xã Tân Tiến','Xã Thượng Bình','Xã Hồ Thầu','Xã Nậm Tỵ','Xã Nậm Khòa','Xã Nậm Xây','Xã Nậm Xín','Xã Tả Phìn','Xã Sán Lùng','Xã Nông Trường Việt Lâm',],
        "Huyện Xín Mần": ["Phường/Xã",'Thị trấn Cốc Pài','Xã Nàn Pỉa','Xã Bản Díu','Xã Chí Cà','Xã Xín Mần','Xã Trung Thịnh','Xã Thèn Phàng','Xã Ngán Chiên','Xã Pà Vầy Sủ','Xã Cốc Rế','Xã Thu Tà','Xã Nàn Ma','Xã Tả Nhìu','Xã Bản Ngò','Xã Chế Là','Xã Khuôn Lùng','Xã Nấm Dẩn','Xã Quảng Nguyên','Xã Nà Chì',],
        "Huyện Bắc Quang": ["Phường/Xã",'Thị trấn Việt Quang','Xã Vĩnh Tuy','Xã Tân Lập','Xã Tân Thành','Xã Đồng Tiến','Xã Đồng Tâm','Xã Tân Quang','Xã Đồng Phúc','Xã Cẩm Giàng','Xã Đồng Hưu','Xã Đồng Tân','Xã Đồng Yên','Xã Đồng Văn','Xã Đồng Phong','Xã Đồng Hồ','Xã Huy Giáp','Xã Đoài Côn','Xã Đồng Quý','Xã Tân Thịnh',],
        "Huyện Quang Bình": ["Phường/Xã",'Thị trấn Vị Xuyên','Xã Keng Đu','Xã Mậu Duệ','Xã Phăng Sô Lin','Xã Thượng Sơn','Xã Cao Bồ','Xã Đạo Đức','Xã Thanh Đức','Xã Việt Đức','Xã Minh Tân','Xã Thuận Hoà','Xã Tùng Vài','Xã Lao Chải','Xã Quảng Ngần','Xã Nậm Dịch','Xã Thanh Xuân','Xã Thanh Thủy','Xã Thanh Sơn','Xã Nậm Tỵ','Xã Bạch Ngọc','Xã Trung Thành'],

    }

// cao bang 
    var huyenCB = ["Quận/huyện","Thị xã Bảo Lạc","Huyện Bảo Lâm","Huyện Hạ Lang","Huyện Hà Quảng","Huyện Thông Nông","Huyện Trà Lĩnh","Huyện Trùng Khánh","Huyện Nguyên Bình","Huyện Hoà An","Huyện Quảng Uyên","Huyện Thạch An","Huyện Hòa An"];
    var phuongXaCB = {
        "Thị xã Bảo Lạc": ["Phường/Xã","Phố Ràng","Xuân Trường","Hồng Trị","Đình Phùng","Đức Xuân","Lý Bôn","Nam Cao","Thượng Hà","Bảo Toàn","Đức Hạnh","Thượng Thôn","Cô Ba","Hồng An","Hoa Thám","Hồng Trung","Kim Cúc","Kim Quan","Bảo Đài","Hồng Việt","Bảo Cường","Hồng Thái","Hồng Thượng","Minh Hoàng","Hồng Sơn","Hồng Phong","Hồng Thịnh","Hồng Thắng","Hồng Thủy","Hồng Vân","Hồng Hà","Hồng Tiến","Hồng Lĩnh","Hồng Long","Hồng Minh","Hồng Thành","Hồng Phúc","Hồng Quang","Hồng Hưng","Hồng Phú","Hồng Vinh","Hồng Công","Hồng Trung","Hồng Vượng","Hồng Tâm","Hồng Thông","Hồng Nhựt","Hồng Thắng","Hồng Đức","Hồng Đoàn","Hồng Phong","Hồng Trực","Hồng Phúc","Hồng Lĩnh","Hồng Quang","Hồng Hưng","Hồng Trung","Hồng Vượng","Hồng Tâm","Hồng Thông","Hồng Nhựt","Hồng Thắng","Hồng Đức","Hồng Đoàn","Hồng Phong","Hồng Trực","Hồng Phúc","Hồng Lĩnh","Hồng Quang","Hồng Hưng","Hồng Trung","Hồng Vượng","Hồng Tâm","Hồng Thông","Hồng Nhựt","Hồng Thắng","Hồng Đức","Hồng Đoàn","Hồng Phong","Hồng Trực","Hồng Phúc","Hồng Lĩnh","Hồng Quang","Hồng Hưng","Hồng Trung","Hồng Vượng","Hồng Tâm","Hồng Thông","Hồng Nhựt","Hồng Thắng","Hồng Đức","Hồng Đoàn","Hồng Phong","Hồng Trực","Hồng Phúc","Hồng Lĩnh","Hồng Quang","Hồng Hưng","Hồng Trung","Hồng Vượng","Hồng Tâm","Hồng Thông","Hồng Nhựt","Hồng Thắng","Hồng Đức","Hồng Đoàn","Hồng Phong","Hồng Trực","Hồng Phúc","Hồng Lĩnh","Hồng Quang","Hồng Hưng","Hồng Trung","Hồng Vượng","Hồng Tâm","Hồng Thông","Hồng Nhựt"],
        "Huyện Bảo Lâm": ["Phường/Xã","Xã Phúc Lộc","Xã Thượng Hà","Xã Việt Cường","Xã Minh Hoàng","Xã Hồng Sơn","Xã Cô Ba","Xã Bảo Lâm","Xã Đức Hạnh","Xã Thái Học","Xã Thanh Vân","Xã Công Bằng","Xã Cao Tân","Xã Nhạn Môn","Xã Cổ Linh","Xã Thạch Lâm","Xã Xuân Lâm","Xã Hồng Thái","Xã Hưng Đạo","Xã Đông Việt","Xã Tiên Phong","Xã An Lạc","Xã Thái Sơn","Thị trấn Ngọc Kỳ"],
        "Huyện Hạ Lang": ["Phường/Xã","Thị trấn Đông Khê","Xã Cách Linh","Xã Đức Long","Xã Đức Xuân","Xã Phổ Yên","Xã Lê Lai","Xã Hoàng Đồng","Xã Đức Thông","Xã Đức Chung","Xã Phương Định","Xã Xuân Minh","Xã Ngũ Lão","Xã Đức La","Xã Đức Lĩnh","Xã Đức Hồng","Xã Bình Ngọc","Xã Chí Đám","Xã Minh Khương"],
        "Huyện Hà Quảng": ["Phường/Xã","Thị trấn Chiêm Hóa","Xã Thành Long","Xã Thành Minh","Xã Thành Công","Xã Thành Tâm","Xã Thành An","Xã Thành Phú","Xã Thành Tiến","Xã Thành Hưng","Xã Thành Nhân","Xã Thành Quang","Xã Thành Đồng","Xã Thành Lợi","Xã Thành Chung","Xã Thành Long","Xã Thành Yên","Xã Thành Hòa","Xã Thành Thịnh","Xã Thành Thủy","Xã Thành Hải","Xã Thành Trung","Xã Thành Vân","Xã Thành Mỹ","Xã Thành Tỉnh","Xã Thành Cẩm","Xã Thành Minh","Xã Thành Vinh","Xã Thành Ninh","Xã Thành Trực","Xã Thành Tân"],
        "Huyện Thông Nông": ["Phường/Xã","Thị trấn Thông Nông","Xã Đức Thông","Xã Cần Yên","Xã Lương Thông","Xã Đức Xương","Xã Đức Hòa","Xã Minh Thông","Xã Thọ Xương","Xã Đức Thắng","Xã Nguyên Thông","Xã Quang Thành","Xã Cần Nông","Xã Đức Thủy","Xã Đức Lợi","Xã Đức An","Xã Vân Trình","Xã Đức Phong","Xã Đức Chính","Xã Đức Nhân","Xã Đức Thành","Xã Đức Thuận","Xã Đức Lân","Xã Đức Hòa","Xã Đức Quang","Xã Đức Minh","Xã Đức Long","Xã Đức Lâm","Xã Đức Thịnh","Xã Đức Nhượng","Xã Đức Chính","Xã Đức Phú","Xã Đức Hiệp","Xã Đức Thạnh","Xã Đức Hòa","Xã Đức Tân","Xã Đức Phát",],
        "Huyện Trà Lĩnh": ["Phường/Xã","Thị trấn Trà Lĩnh","Xã Hùng Quốc","Xã Quang Uyên","Xã Trùng Khánh","Xã Lăng Hiếu","Xã Phú Bình","Xã Quang Hán","Xã Quang Trung","Xã Quang Vinh","Xã Hồng Đại","Xã Quang Minh","Xã Quang Trường","Xã Quang Long","Xã Quang Yên","Xã Quang Tiến","Xã Quang Thành","Xã Quang Lịch","Xã Quang Hưng","Xã Quang Hải","Xã Quang Phúc","Xã Quang Hòa","Xã Quang Minh","Xã Quang Diệu","Xã Quang Gia","Xã Quang Tân","Xã Quang Trung","Xã Quang Hội","Xã Quang Sơn","Xã Quang Thọ","Xã Quang Lộc","Xã Quang Thái","Xã Quang Châu","Xã Quang Vinh","Xã Quang Hùng","Xã Quang Hòa","Xã Quang Tân","Xã Quang Trung","Xã Quang Hưng","Xã Quang Xuân","Xã Quang Trường","Xã Quang Phúc","Xã Quang Lập","Xã Quang Trường","Xã Quang Thắng","Xã Quang Đức","Xã Quang Trung","Xã Quang Hải","Xã Quang Hòa","Xã Quang Chính","Xã Quang Thịnh","Xã Quang Tân","Xã Quang Trường","Xã Quang Thành","Xã Quang Thuận","Xã Quang Thịnh","Xã Quang Hưng","Xã Quang Hòa","Xã Quang Đức","Xã Quang Trung","Xã Quang Thắng","Xã Quang Thịnh","Xã Quang Tân","Xã Quang Trường","Xã Quang Thành","Xã Quang Thuận","Xã Quang Thắng","Xã Quang Thanh","Xã Quang Hòa","Xã Quang Trung","Xã Quang Hưng","Xã Quang Đức","Xã Quang Trường","Xã Quang Thái","Xã Quang Thọ","Xã Quang Hải","Xã Quang Thắng","Xã Quang Thành","Xã Quang Thuận","Xã Quang Thọ","Xã Quang Thịnh","Xã Quang Tân","Xã Quang Trường","Xã Quang Trung","Xã Quang Hưng","Xã Quang Đức","Xã Quang Thái","Xã Quang Thọ","Xã Quang Hải","Xã Quang Thắng","Xã Quang Thành","Xã Quang Thuận","Xã Quang Thịnh","Xã Quang Tân","Xã Quang Trường","Xã Quang Trung","Xã Quang Hưng","Xã Quang Đức","Xã Quang Thái","Xã Quang Thọ","Xã Quang Hải","Xã Quang Thắng","Xã Quang Thành","Xã Quang Thuận","Xã Quang Thịnh","Xã Quang Tân","Xã Quang Trường","Xã Quang Trung","Xã Quang Hưng","Xã Quang Đức","Xã Quang Thái","Xã Quang Thọ","Xã Quang Hải","Xã Quang Thắng","Xã Quang Thành","Xã Quang Thuận","Xã Quang Thịnh","Xã Quang Tân","Xã Quang Trường","Xã Quang Trung","Xã Quang Hưng","Xã Quang Đức"],
        "Huyện Trùng Khánh": ["Phường/Xã","Thị trấn Trùng Khánh","Xã Đoài Côn","Xã Phong Nậm","Xã Lăng Hiếu","Xã Đình Phong","Xã Đàm Thuỷ","Xã Đình Minh","Xã Cảnh Tiên","Xã Trung Phúc","Xã Đình Đông","Xã Đình Tổ","Xã Đình Hồng","Xã Đình An","Xã Đình Giáp","Xã Đình Hưng","Xã Đình Môn","Xã Đồng Đăng","Xã Cao Thăng","Xã Đoài Khôn","Xã Đình Làng","Xã Đình Phùng","Xã Đình Lập","Xã Đình Tăng","Xã Đình Liên","Xã Đình Bảng","Xã Đình Phú","Xã Đình Giáo","Xã Đình Thủy","Xã Đình Ông","Xã Đình An","Xã Đình Ninh","Xã Đình Tân","Xã Đình Long","Xã Đình Khê","Xã Đình Liệt","Xã Đình Khao","Xã Đình Trung","Xã Đình Văn","Xã Đình Nam","Xã Đình Đúc","Xã Đình Xuyên","Xã Đình Tiến","Xã Đình Ông","Xã Đình Phong","Xã Đình Tường","Xã Đình Tiến","Xã Đình Long","Xã Đình Lâm","Xã Đình Lập","Xã Đình Lập","Xã Đình Lượng","Xã Đình Ninh","Xã Đình Phú","Xã Đình Lễ","Xã Đình Lũng","Xã Đình Minh","Xã Đình Môn","Xã Đình Mỹ","Xã Đình Nam","Xã Đình Nhiên","Xã Đình Phong","Xã Đình Phúc","Xã Đình Phú","Xã Đình Phúc","Xã Đình Phục","Xã Đình Phúc","Xã Đình Quan","Xã Đình Quang","Xã Đình Quý","Xã Đình Tân","Xã Đình Thành","Xã Đình Thắng","Xã Đình Thiện","Xã Đình Thịnh","Xã Đình Thành","Xã Đình Thắng","Xã Đình Thịnh","Xã Đình Thịnh","Xã Đình Thịnh","Xã Đình Thịnh","Xã Đình Thuận","Xã Đình Thịnh","Xã Đình Thịnh","Xã Đình Thịnh","Xã Đình Thịnh","Xã Đình Thịnh","Xã Đình Thịnh","Xã Đình Thịnh","Xã Đình Thịnh","Xã Đình Thịnh","Xã Đình Thịnh","Xã Đình Thịnh","Xã Đình Thịnh","Xã Đình Thịnh","Xã Đình Thịnh","Xã Đình Thịnh","Xã Đình Thịnh","Xã Đình Thịnh","Xã Đình Thịnh","Xã Đình Thịnh","Xã Đình Thịnh","Xã Đình Thịnh","Xã Đình Thịnh","Xã Đình Thịnh","Xã Đình Thịnh","Xã Đình Thịnh","Xã Đình Thịnh","Xã Đình Thịnh","Xã Đình Thịnh","Xã Đình Thịnh","Xã Đình Thịnh","Xã Đình Thịnh","Xã Đình Thịnh","Xã Đình Thịnh"],
        "Huyện Nguyên Bình": ["Phường/Xã","Thị trấn Nguyên Bình","Xã Tĩnh Túc","Xã Yên Lạc","Xã Triệu Nguyên","Xã Ca Thành","Xã Xuân Phú","Xã Thanh Long","Xã Hoa Thám","Xã Quang Thành","Xã Hưng Đạo","Xã Ngọc Động","Xã Bắc Hợp","Xã Hùng Đức","Xã Thanh Đức","Xã Quán Triều","Xã Trung Sơn","Xã Kim Chân","Xã Hưng Thịnh","Xã Đại Sơn","Xã Đức Thông","Xã Lưu Ngọc","Xã Đoàn Kết","Xã Quang Minh","Xã Trường Giang","Xã Đông Lợi","Xã Trường Sơn","Xã Đức Long","Xã An Sinh","Xã Minh Tâm","Xã Vũ Nông",],
        "Huyện Hoà An": ["Phường/Xã","Thị trấn Hoà An","Xã Cô Mười","Xã Bình Long","Xã Hòa Phú","Xã Hòa Thanh","Xã Hòa An","Xã Hòa Thắng","Xã Hòa Tiến","Xã Hòa Đức","Xã Hòa Phong","Xã Hòa Lạc","Xã Hòa Sơn","Xã Hòa Hưng","Xã Hòa Minh","Xã Hòa An","Xã Hòa Thịnh","Xã Hòa Quang","Xã Hòa Định","Xã Hòa Bình","Xã Hòa Thành","Xã Hòa Phúc","Xã Hòa Thọ","Xã Hòa Chính","Xã Hòa An","Xã Hòa Thịnh","Xã Hòa Nhân","Xã Hòa Bình","Xã Hòa Thắng","Xã Hòa Lạc","Xã Hòa Long","Xã Hòa Sơn",],
        "Huyện Quảng Uyên": ["Phường/Xã","Thị trấn Quảng Uyên","Xã Phi Hải","Xã Quảng Hưng","Xã Quảng Phong","Xã Quảng Lạc","Xã Bình Lăng","Xã Quảng Xương","Xã Quảng Tiến","Xã Quảng Trung","Xã Quảng Châu","Xã Quảng Văn","Xã Quảng Hòa","Xã Quảng Minh","Xã Quảng Long","Xã Quảng Yên","Xã Quảng Hưng","Xã Quảng Hồng","Xã Quảng Giang","Xã Quảng Bình","Xã Quảng Phúc","Xã Quảng Trạch","Xã Quảng Đức","Xã Quảng Ngọc","Xã Quảng Thanh","Xã Quảng Tân","Xã Quảng Hải","Xã Quảng Lưu","Xã Quảng Khê","Xã Quảng Hòa","Xã Quảng Trung","Xã Quảng Thịnh","Xã Quảng Long","Xã Quảng Thạch","Xã Quảng Tường","Xã Quảng Lộc","Xã Quảng Hải","Xã Quảng Đông","Xã Quảng Trường","Xã Quảng Chính","Xã Quảng Đức","Xã Quảng Hòa","Xã Quảng Thành"],
        "Huyện Thạch An": ["Phường/Xã","Thị trấn Thạch An","Xã Cao Thượng","Xã Thạch Sơn","Xã Thạch Lâm","Xã Thạch Quảng","Xã Thạch Tâm","Xã Thạch Tân","Xã Thạch Định","Xã Thạch Đồng","Xã Thạch Long","Xã Thạch Đài","Xã Thạch Hội","Xã Thạch Thắng","Xã Thạch Trị","Xã Thạch Lễ","Xã Thạch Quý","Xã Thạch Đồng","Xã Thạch Hương","Xã Thạch Kênh","Xã Thạch Bình","Xã Thạch Đức","Xã Thạch Lưu","Xã Thạch Đồng","Xã Thạch Long","Xã Thạch Lâm","Xã Thạch Liên","Xã Thạch Trung","Xã Thạch Ngọc","Xã Thạch Văn","Xã Thạch Đài","Xã Thạch Sơn","Xã Thạch Hội","Xã Thạch Đồng","Xã Thạch Vĩnh","Xã Thạch Lưu","Xã Thạch Bình","Xã Thạch Liên","Xã Thạch Động","Xã Thạch Hương","Xã Thạch Đức","Xã Thạch Mỹ","Xã Thạch Thắng","Xã Thạch Trị","Xã Thạch Lễ","Xã Thạch Hòa","Xã Thạch Thành","Xã Thạch Sơn"],
        "Huyện Hòa An": ["Phường/Xã","Thị trấn Hòa An","Xã Đồng Đăng","Xã Đức Hạnh","Xã Tam Kim","Xã Tân Trịnh","Xã Đức Chính","Xã Hòa Phú","Xã Đại Sơn","Xã Đức Minh","Xã Đức Thịnh","Xã Đức Ninh","Xã Đức Thông","Xã Đức Lợi","Xã Đức Long","Xã Đức Yên","Xã Đức Thanh","Xã Đức Hòa","Xã Đức Thắng","Xã Đức Tài","Xã Đức Xuân","Xã Đức Lạc","Xã Đức Cảnh","Xã Đức Thịnh","Xã Đức Phú","Xã Đức Lập","Xã Đức An","Xã Đức Khang","Xã Đức Hưng","Xã Đức Dũng","Xã Đức Long","Xã Đức Lĩnh","Xã Đức Hòa","Xã Đức Thịnh","Xã Đức Dương","Xã Đức Xuân","Xã Đức Vân","Xã Đức Thắng","Xã Đức Giang","Xã Đức Thủy","Xã Đức Lâm","Xã Đức Thành","Xã Đức Chính","Xã Đức Bình","Xã Đức Thành","Xã Đức Tân","Xã Đức Phong","Xã Đức Tường","Xã Đức Thọ","Xã Đức Đồng"]
    }

// Tuyên Quang 
    var huyenTQ = ["Quận/huyện","Huyện Chiêm Hóa","Huyện Hàm Yên","Huyện Lâm Bình","Huyện Na Hang","Huyện Yên Sơn","Huyện Sơn Dương"];
    var phuongXaTQ = {
        "Huyện Chiêm Hóa": ["Thị trấn Hòa An","Xã Đồng Văn","Xã Đạo Đức","Xã Quang Hán","Xã Hoàng Đạo","Xã Đại Sơn","Xã Phú Vân","Xã Đoài Dương","Xã Điềm Thụy","Xã Yên Phú","Xã Đại Tiến","Xã Phú Tiến","Xã Sơn Phú","Xã Vĩnh Lại","Xã Vĩnh Phú","Xã Công Đa","Xã Trung Hà","Xã Đoài Côn","Xã Tân Đức","Xã Đại Phú","Xã Minh Quang","Xã Triệu Độ"],
        "Huyện Hàm Yên": ["Thị trấn Hàm Yên","Xã Xuân Lập","Xã Minh Tân","Xã Nam Cường","Xã Yên Thành","Xã Bạch Xa","Xã Minh Sơn","Xã Yên Phú","Xã Tân Thành","Xã Phú Lạc","Xã Hoàng Vân","Xã Minh Hương","Xã Mai Tùng","Xã Phú Thịnh","Xã Yên Hùng","Xã Đông Lợi","Xã Đại Phú","Xã Đại Tự","Xã Thanh Vân","Xã Đồng Sơn","Xã Yên Thuận","Xã Minh Côi","Xã Viễn Sơn","Xã Minh Quân","Xã Nam Hương","Xã Đông Xá","Xã Tân Thịnh","Xã Đồng Lạc","Xã Đông Yên","Xã Tân Lập","Xã Điềm Mặc","Xã Thanh Mai","Xã Đông Thanh","Xã Yên Lâm","Xã Đông Tiến","Xã Trung Thành","Xã Đông La","Xã Yên Phong","Xã Hàm Long","Xã Hàm Minh"],
        "Huyện Lâm Bình": ["Thị trấn Nà Hang","Xã Sinh Long","Xã Thượng Giáp","Xã Sơn Phúc","Xã Thanh Tương","Xã Yên Hoa","Xã Hồng Thái","Xã Điềm Thắng","Xã Thượng Nông","Xã Nhân Lý","Xã Khau Tinh","Xã Thượng Quan","Xã Năng Khả","Xã Xuân Lễ","Xã Hồng Thượng","Xã Hóa Thượng","Xã Bình Phúc","Xã Côn Lôn","Xã Trung Hà","Xã Đà Vị","Xã Thanh Nông","Xã Tiền Phong","Xã Hùng Sơn","Xã Đồng Khê","Xã Phúc Khánh","Xã Trung Hòa","Xã Quang Phong","Xã Bình Yên","Xã Xuân Minh","Xã Văn Lang","Xã Côn Minh","Xã Gia Phú","Xã Minh Thuận","Xã Minh Dân","Xã Minh Khương","Xã Minh Trí","Xã Thanh Bình","Xã Thanh Mai","Xã Thanh Minh","Xã Thanh Vận"],
        "Huyện Na Hang": ["Thị Trấn Na Hang","Xã Sinh Long","Xã Thượng Giáp","Xã Sơn Phúc","Xã Thanh Tương","Xã Yên Hoa","Xã Hồng Thái","Điềm Thắng","Thượng Nông","Nhân Lý","Khau Tinh","Thượng Quan","Năng Khả","Xuân Lễ","Hồng Thượng","Hóa Thượng","Bình Phúc","Côn Lôn","Trung Hà","Đà Vị"],
        "Huyện Yên Sơn": ["Thị trấn Yên Sơn","Xã Hồng Phong","Xã Tân Bắc","Xã Yên Phú","Xã Tân Nam","Xã Tân Trung","Xã Tiến Bộ","Xã Đại Phú","Xã Quí Quân"],
        "Huyện Sơn Dương": ["Thị trấn Sơn Dương","Xã Trung Yên","Xã Minh Thanh","Xã Tân Trào","Xã Xuân Phú","Xã Hợp Thành","Xã Bình Yên","Xã Kim Phú","Xã Tân Minh","Xã Văn Phú","Xã Cấp Tiến","Xã Chi Thiết","Xã Đông Lợi","Xã Kim Quan","Xã Trung Thành","Xã Tân Sơn","Xã Thanh Phú","Xã Lai Đồng","Xã Đại Phú","Xã Tiên Phú","Xã Văn Lang","Xã Hoàng Đồng","Xã Hồng Lạc","Xã Phú Lương","Xã Đại Lịch","Xã Vũ Lăng","Xã Tân Lập"],
    }

// Lào Cai 
    var huyenLC = ["Huyện Bảo Thắng","Huyện Bảo Yên","Huyện Bát Xát","Huyện Mường Khương","Huyện Sa Pa","Huyện Văn Bàn",];
    var phuongXaLC = {
        "Huyện Bảo Thắng": ["Thị trấn Tam Đường","Xã Lùng Thàng","Xã Thèn Sin","Xã Pà Tẩu",],
        "Huyện Bảo Yên": ["Thị trấn Khánh Yên","Xã Văn Sơn","Xã Võ Lao","Xã Sơn Thuỷ"],
        "Huyện Bát Xát": ["Thị trấn Bát Xát","Xã A Mú Sung","Xã A Lù","Xã Trịnh Tường",],
        "Huyện Mường Khương": ["Thị trấn Mường Khương","Xã Tả Gia Khâu","Xã Tả Ngải Chồ","Xã Lùng Thịnh",],
        "Huyện Sa Pa": ["Thị trấn Sa Pa","Xã Cầu Mây","Xã Sa Pả","Xã Trung Chải",],
        "Huyện Văn Bàn": ["Thị trấn Khánh Yên","Xã Minh Lương","Xã Văn Sơn","Xã Võ Lao",],
    }

// Điện Biên 
    var huyenDB = ["Huyện Điện Biên","Huyện Điện Biên Đông","Huyện Mường Ảng","Huyện Mường Chà","Huyện Mường Nhé","Huyện Mường Lay","Huyện Tủa Chùa","Huyện Tuần Giáo","Huyện Nậm Pồ","Thành phố Điện Biên Phủ"];
    var phuongXaDB = {
        "Huyện Điện Biên": ["Thị trấn Điện Biên Phủ","Xã Thanh Minh","Xã Thanh Trường","Xã Thanh Xuân",],
        "Huyện Điện Biên Đông": ["Thị trấn Điện Biên Đông","Xã Na Son","Xã Phì Nhừ","Xã Chiềng Sơ",],
        "Huyện Mường Ảng": ["Thị trấn Mường Ảng","Xã Mường Lạn","Xã Ngối Cáy","Xã Nậm Lạnh",],
        "Huyện Mường Chà": ["Thị trấn Mường Chà","Xã Huổi Lếnh","Xã Mường Mươn","Xã Nậm Nèn",],
        "Huyện Mường Nhé": ["Thị trấn Mường Nhé","Xã Huổi Só","Xã Nà Nhạn","Xã Nà Bủng",],
        "Huyện Mường Lay": ["Thị trấn Mường Lay","Xã Lay Nưa","Xã Lay Xuân","Xã Lay Nứa",],
        "Huyện Tủa Chùa": ["Thị trấn Tủa Chùa","Xã Huổi Só","Xã Sính Phình","Xã Tả Phìn",],
        "Huyện Tuần Giáo": ["Thị trấn Tuần Giáo","Xã Phình Sáng","Xã Rạng Đông","Xã Mùn Chung",],
        "Huyện Nậm Pồ": ["Thị trấn Nậm Pồ","Xã Nậm Tin","Xã Pa Tần","Xã Chà Cang",],
    }

// Lai Châu
    var huyenLC = ["Thị xã Lai Châu","Huyện Mường Tè","Huyện Sìn Hồ","Huyện Phong Thổ","Huyện Than Uyên","Huyện Tân Uyên","Huyện Nậm Nhùn","Huyện Tam Đường"];
    var phuongXaLc = {
        "Thị xã Lai Châu": ["Phường Tân Phong","Phường Quyết Thắng","Phường Quyết Tiến","Phường Đoàn Kết"],
        "Huyện Mường Tè": ["Thị trấn Mường Tè","Xã Bum Tở","Xã Thu Lũm","Xã Ka Lăng"],
        "Huyện Sìn Hồ": ["Thị trấn Sìn Hồ","Xã Chăn Nưa","Xã Pa Tần","Xã Phìn Hồ",],
        "Huyện Phong Thổ": ["Thị trấn Phong Thổ","Xã Huổi Luông","Xã Huổi Một","Xã Ma Ly Pho",],
        "Huyện Than Uyên": ["Thị trấn Than Uyên","Xã Mường Khoa","Xã Sìn Thầu","Xã Tà Gia",],
        "Huyện Tân Uyên": ["Thị trấn Tân Uyên","Xã Mường Thín","Xã Hố Mít","Xã Nậm Cần"],
        "Huyện Nậm Nhùn": ["Thị trấn Nậm Nhùn","Xã Lê Lợi","Xã Pú Đao","Xã Nậm Chà",],
        "Huyện Tam Đường": ["Thị trấn Tam Đường","Xã Trung Lương","Xã Tả Lèng","Xã Phong Thổ",],
        
    }

// Sơn La
    var huyenSL = ["Huyện Sông Mã","Huyện Mường La","Huyện Quỳnh Nhai","Huyện Thuận Châu","Huyện Bắc Yên","Huyện Phù Yên","Huyện Mộc Châu","Huyện Yên Châu","Huyện Mai Sơn","Huyện Sốp Cộp","Huyện Vân Hồ","Huyện Bắc Sơn","Huyện Quỳnh Phụ","Huyện Mường Chà"];
    var phuongXaSL = {
        "Huyện Sông Ma":["Thị trấn Sông Mã","Xã Bó Sinh","Xã Bảo Ngọc","Xã Chiềng Sơ",],
        "Huyện Mường La":["Thị trấn Mường La","Xã Sùng Đô","Xã Nậm Lạnh","Xã Pú Đao",],
        "Huyện Quỳnh Nhai":["Thị trấn Quỳnh Nhai","Xã Hát Lìu","Xã Nậm Khắt","Xã Nậm Càng",],
        "Huyện Thuận Châu":["Thị trấn Thuận Châu","Xã Hữu Kiệm","Xã Mường É","Xã Mường Bám"],
        "Huyện Bắc Yên":["Thị trấn Bắc Yên","Xã Phiêng Ban","Xã Làng Chếu","Xã Háng Đồng",],
        "Huyện Phù Yên":["Thị trấn Phù Yên","Xã Suối Tọ","Xã Mường Thải","Xã Mường Cơi",],
        "Huyện Mộc Châu":["Thị trấn Mộc Châu","Xã Tân Hợp","Xã Nà Mường","Xã Chiềng Hắc",],
        "Huyện Yên Châu":["Thị trấn Yên Châu","Xã Chiềng Đông","Xã Sập Vạt","Xã Chiềng Khoi",],
        "Huyện Mai Sơn":["Thị trấn Mai Sơn","Xã Hát Lót","Xã Chiềng Lề","Xã Mường Bằng",],
        "Huyện Sốp Cộp":["Thị trấn Sốp Cộp","Xã Sam Kha","Xã Púng Bánh","Xã Dồm Cang",],
        "Huyện Vân Hồ":[ "Thị trấn Vân Hồ","Xã Lóng Luông","Xã Lóng Sập","Xã Lóng Hẹ",],
        "Huyện Bắc Sơn":["Thị trấn Bắc Sơn","Xã Long Hưng","Xã Chiềng Ngần","Xã Chiềng Ban",],
        "Huyện Quỳnh Phụ":["Thị trấn Quỳnh Phụ","Xã Chiềng La","Xã Chiềng Ly","Xã Chiềng Tương",],
        "Huyện Mường Chà":["Thị trấn Mường Chà","Xã Tà Tổng","Xã Mường Tùng","Xã HừaXin"],
    }

// Yên Bái
    var huyenYB = ["Huyện Yên Bình","Huyện Văn Yên","Huyện Mù Căng Chải","Huyện Trấn Yên","Huyện Trạm Tấu","Huyện Văn Chấn","Huyện Nghĩa Lộ","Huyện Lục Yên","Huyện Mạc Yên","Huyện Yên Bái"];
    var phuongXaYB = {
        "Huyện Yên Bình": ["Thị trấn Yên Bình","Xã Thác Bà","Xã Xuân Long","Xã Tích Cốc"],
        "Huyện Văn Yên": ["Thị trấn Văn Yên","Xã An Thịnh","Xã Yên Phú","Xã Yên Hưng"],
        "Huyện Mù Căng Chải": ["Thị trấn Mù Căng Chải","Xã Hồ Bốn","Xã Nậm Có","Xã Cao Phạ",],
        "Huyện Trấn Yên": ["Thị trấn Trấn Yên","Xã Nậm Lang","Xã Trạm Tấu","Xã Túc Đán",],
        "Huyện Trạm Tấu": ["Thị trấn Trạm Tấu","Xã Pá Lau","Xã Lùng Phình","Xã Trạm Tấu",],
        "Huyện Văn Chấn": ["Thị trấn Văn Chấn","Xã Thượng Tân","Xã Phúc Ninh","Xã Sơn Phú"],
        "Huyện Nghĩa Lộ": ["Thị trấn Nghĩa Lộ","Xã Nghĩa An","Xã Nghĩa Lợi","Xã Nghĩa Phúc"],
        "Huyện Lục Yên": ["Thị trấn Lục Yên","Xã Hào Lý","Xã Lâm Thượng","Xã Lâm Động",],
        "Huyện Mạc Yên": ["Thị trấn Mạc ĐỘng","Xã Cảm Ân","Xã Mạc Đạo","Xã Cao Phong",],
        "Huyện Yên Bái": ["Thị trấn Yên Bái","Xã Tuy Lộc","Xã Văn Phú","Xã Tân Thịnh"]
    }
    
// Hòa Bình 
    var huyenHB = ["Huyện Đà Bắc","Huyện Kim Bôi","Huyện Lạc Sơn","Huyện Lạc Thủy","Huyện Lương Sơn","Huyện Mai Châu","Huyện Tân Lạc","Huyện Yên Thủy","Huyện Cao Phong","Huyện Kỳ Sơn"];
    var phuongXaHB = {
        "Huyện Đà Bắc": ["Thị trấn Đà Bắc","Xã Thuần Mang","Xã Bắc Sơn","Xã Nhân Nghĩa"],
        "Huyện Kim Bôi": ["Thị trấn Bo","Xã Nghĩa Thầm","Xã Nghĩa Lâm","Xã Sơn Thủy"],
        "Huyện Lạc Sơn": ["Thị trấn Lạc Sơn","Xã Lạc Lương","Xã Lạc Thịnh","Xã Lạc Long",],
        "Huyện Lạc Thủy": ["Thị trấn Lạc Thủy","Xã Liên Hòa","Xã Liên Vũ","Xã Thạch Yên"],
        "Huyện Lương Sơn": ["Thị trấn Lương Sơn","Xã Lâm Sơn","Xã Hòa Sơn","Xã Hòa Bình"],
        "Huyện Mai Châu": ["Thị trấn Mai Châu","Xã Sơn Thủy","Xã Pà Cò","Xã Hang Kia"],
        "Huyện Tân Lạc": ["Thị trấn Tân Lạc","Xã Bắc Sơn","Xã Nam Sơn","Xã Địch Giáo"],
        "Huyện Yên Thủy": ["Thị trấn Yên Thủy","Xã Bảo Hiệu","Xã Đại Phác","Xã Đồng Lương"],
        "Huyện Cao Phong": ["Thị trấn Cao Phong","Xã Bình Thanh","Xã Thu Phong","Xã Bắc Phong"],
        "Huyện Kỳ Sơn": [ "Thị trấn Kỳ Sơn","Xã Hợp Lý","Xã Cửu Cao","Xã Phú Minh",],
    }

// Thái Nguyên
    var huyenTN = ["Huyện Đại Từ","Huyện Định Hóa","Huyện Đồng Hỷ","Huyện Phổ Yên","Huyện Phú Bình","Huyện Phú Lương","Huyện Sông Công","Huyện Võ Nhai"];
    var phuongXaTN = {
        "Huyện Đại Từ": ["Thị trấn Đại Từ","Xã Bản Nguyên","Xã Quân Chu","Xã Tân Linh",],
        "Huyện Định Hóa": ["Thị trấn Hòa Mục","Xã Định Hóa","Xã Thanh Định","Xã Trung Hội"],
        "Huyện Đồng Hỷ": ["Thị trấn Nông Trường Việt Yên","Thị trấn Đồng Hỷ","Xã Đồng Lạc","Xã Đông Sơn"],
        "Huyện Phổ Yên": ["Thị trấn Phổ Yên","Xã Bạch Thượng","Xã Cấp Dẫn","Xã Đội Bình"],
        "Huyện Phú Bình": ["Thị trấn Phú Bình","Xã Bàn Đạt","Xã Bảo Cường","Xã Cẩm Đình"],
        "Huyện Phú Lương": ["Thị trấn Phú Lương","Xã Gia Phú","Xã Hợp Thành","Xã Kiên Đài"],
        "Huyện Sông Công": ["Thị trấn Sông Công","Xã Đồng Quý","Xã Đồng Kỳ","Xã Đức Bác"],
        "Huyện Võ Nhai": ["Thị trấn Võ Nhai","Xã An Khánh","Xã Bình Long","Xã Cúc Đường"],
    }

// Lạng Sơn
    var huyenLS = ["Huyện Bắc Sơn","Huyện Bình Gia","Huyện Cao Lộc","Huyện Chi Lăng","Huyện Đình Lập","Huyện Hữu Lũng","Huyện Lộc Bình","Huyện Tràng Định","Huyện Văn Lãng","Huyện Văn Quan"];
    var phuongXaLS = {
        "Huyện Bắc Sơn": ["Thị trấn Bắc Sơn","Xã Bắc Quỳnh","Xã Chiến Thắng","Xã Chiêu Vũ"],
        "Huyện Bình Gia": ["Thị trấn Bình Gia","Xã Bình La","Xã Hòa Bình","Xã Hồng Phong"],
        "Huyện Cao Lộc": ["Thị trấn Cao Lộc","Xã Cao Lâu","Xã Gia Cát","Xã Hải Yến"],
        "Huyện Chi Lăng": ["Thị trấn Đồng Mỏ","Xã Bắc Thủy","Xã Bằng Hữu","Xã Bằng Mạc"],
        "Huyện Đình Lập": ["Thị trấn Đình Lập","Xã Bắc Lãng","Xã Bắc Xa","Xã Bính Xá"],
        "Huyện Hữu Lũng": ["Thị trấn Hữu Lũng","Xã Bắc Sơn","Xã Bá Xuyên","Xã Cai Kinh"],
        "Huyện Lộc Bình": ["Thị trấn Na Dương","Xã Bình Xá","Xã Cô Mễ","Xã Đông Quan"],
        "Huyện Tràng Định": ["Thị trấn Tràng Định","Xã Bắc La","Xã Bính La","Xã Cao Minh"],
        "Huyện Văn Lãng": ["Thị trấn Na Sầm","Xã An Hùng","Xã Đồng Lạc","Xã Đồng Thắng"],
        "Huyện Văn Quan": ["Thị trấn Văn Quan","Xã An Sơn","Xã Bình Phúc","Xã Chấn Thành"],
    }

// Quảng Ninh
    var huyenQN = [ "Huyện Ba Chẽ","Huyện Bình Liêu","Huyện Cô Tô","Huyện Đầm Hà","Huyện Hải Hà","Huyện Hoành Bồ","Huyện Tiên Yên","Huyện Vân Đồn"];
    var phuongXaQN = {
        "Huyện Ba Chẽ":["Thị trấn Ba Chẽ","Xã Cái Bầu","Xã Đạp Thanh","Xã Đồn Đạc"],
        "Huyện Bình Liêu":["Thị trấn Bình Liêu","Xã Đồng Tâm","Xã Đồng Văn","Xã Húc Động"],
        "Huyện Cô Tô":["Thị trấn Cô Tô","Xã Đồng Tiến","Xã Thanh Lân","Xã Thanh Sơn"],
        "Huyện Đầm Hà":["Thị trấn Đầm Hà","Xã Đại Bình","Xã Đầm Hà","Xã Đầm Làm"],
        "Huyện Hải Hà":["Thị trấn Hải Hà","Xã Cảnh Dương","Xã Cộng Hòa","Xã Đằng Giang"],
        "Huyện Hoành Bồ":["Thị trấn Hoành Bồ","Xã Cai Rồng","Xã Đồn Cạnh","Xã Đồn Xá"],
        "Huyện Tiên Yên":["Thị trấn Tiên Yên","Xã Đại Dực","Xã Đại Thành","Xã Điền Xá"],
        "Huyện Vân Đồn":["Thị trấn Cái Rồng","Xã Bản Sen","Xã Bình Dân","Xã Đài Xuyên"],
    }

// Bắc Giang
    var huyenLC = [];
    var phuongXaLc = {}

// Phú Thọ
    var huyenLC = [];
    var phuongXaLc = {}

// Vĩnh Phúc
    var huyenLC = [];
    var phuongXaLc = {}

// Bắc Ninh 
    var huyenLC = [];
    var phuongXaLc = {}

// Hải Dương
    var huyenLC = [];
    var phuongXaLc = {}

// Hải Phòng
    var huyenLC = [];
    var phuongXaLc = {}

// Hưng Yên
    var huyenLC = [];
    var phuongXaLc = {}

// Thái Bình
    var huyenLC = [];
    var phuongXaLc = {}

// Nam Định
    var huyenLC = [];
    var phuongXaLc = {}

// Hà Nam
    var huyenLC = [];
    var phuongXaLc = {}

// Ninh Bình
    var huyenLC = [];
    var phuongXaLc = {}

// Thanh Hóa
    var huyenLC = [];
    var phuongXaLc = {}

// Nghệ An
    var huyenLC = [];
    var phuongXaLc = {}

// Hà Tĩnh
    var huyenLC = [];
    var phuongXaLc = {}

// Quảng Bình
    var huyenLC = [];
    var phuongXaLc = {}

// Quảng Trị
    var huyenLC = [];
    var phuongXaLc = {}
    
// Huế
    var huyenLC = [];
    var phuongXaLc = {}

// Đà Nẵng
    var huyenLC = [];
    var phuongXaLc = {}

// Quảng Nam
    var huyenLC = [];
    var phuongXaLc = {}

// Quảng Ngãi
    var huyenLC = [];
    var phuongXaLc = {}

// Bình Định
    var huyenLC = [];
    var phuongXaLc = {}

// Phú Yên
    var huyenLC = [];
    var phuongXaLc = {}

// Khánh Hòa
    var huyenLC = [];
    var phuongXaLc = {}

// Ninh Thuận
    var huyenLC = [];
    var phuongXaLc = {}

// Bình Thuận
    var huyenLC = [];
    var phuongXaLc = {}

// Kom Tum
    var huyenLC = [];
    var phuongXaLc = {}

// Gia Lai
    var huyenLC = [];
    var phuongXaLc = {}

// Đăk Lăk
    var huyenLC = [];
    var phuongXaLc = {}

// Đăk Nông
    var huyenLC = [];
    var phuongXaLc = {}

// Lâm Đồng
    var huyenLC = [];
    var phuongXaLc = {}

// Bình Phước
    var huyenLC = [];
    var phuongXaLc = {}

// Tây Ninh
    var huyenLC = [];
    var phuongXaLc = {}

// Bình Dương
    var huyenLC = [];
    var phuongXaLc = {}

// Đồng Nai
    var huyenLC = [];
    var phuongXaLc = {}

// Vũng Tau
    var huyenLC = [];
    var phuongXaLc = {}

// Hồ Chí Minh
    var huyenLC = [];
    var phuongXaLc = {}

// Long An
    var huyenLC = [];
    var phuongXaLc = {}

// Tiền Giang
    var huyenLC = [];
    var phuongXaLc = {}

// Bến Tre
    var huyenLC = [];
    var phuongXaLc = {}

// Trà Vinh 
    var huyenLC = [];
    var phuongXaLc = {}

// Vĩnh Long
    var huyenLC = [];
    var phuongXaLc = {}

// Đồng Tháp
    var huyenLC = [];
    var phuongXaLc = {}

// An Giang
    var huyenLC = [];
    var phuongXaLc = {}

// Kiên Giang
    var huyenLC = [];
    var phuongXaLc = {}

// Cần Thơ

    var huyenLC = [];
    var phuongXaLc = {}
// Hậu Giang
    var huyenLC = [];
    var phuongXaLc = {}

// Sóc Trăng
    var huyenLC = [];
    var phuongXaLc = {}

// Bạc Liêu

    var huyenLC = [];
    var phuongXaLc = {}

// Cà Mau
    var huyenLC = [];
    var phuongXaLc = {}
// Hồ Chí Minh
    var huyenLC = [];
    var phuongXaLc = {}

    var quanHCM = ["Quận/huyện","Quận 1", "Quận 2","Quận 3","Quận 4","Quận 5","Quận 6","Quận 7","Quận 8","Quận 9","Quận 10","Quận 11","Quận 12","Quận Bình Tân","Quận Bình Thạnh","Quận Gò Vấp","Quận Phú Nhuận","Quận Tân Bình","Quận Tân Phú","Quận Thủ Đức","Huyện Bình Chánh","Huyện Cần Giờ","Huyện Củ Chi","Huyện Hóc Môn","Huyện Nhà Bè"];
    var phuongXaHCM = {
        "Quận 1":["Phường Bến Nghé","Phường Bến Thành","Phường Cầu Kho","Phường Cầu Ông Lãnh","Phường Cô Giang","Phường Đa Kao","Phường Nguyễn Cư Trinh","Phường Nguyễn Thái Bình","Phường Phạm Ngũ Lão","Phường Tân Định","Phường Đa Kao","Phường Bến Thành","Phường Cầu Kho","Phường Cầu Ông Lãnh","Phường Cô Giang","Phường Nguyễn Cư Trinh","Phường Nguyễn Thái Bình","Phường Phạm Ngũ Lão","Phường Tân Định","Phường Đakao"],
        "Quận 2":["Phường An Khánh","Phường An Lợi Đông","Phường An Phú","Phường Bình An","Phường Bình Khánh","Phường Bình Trưng Đông","Phường Bình Trưng Tây","Phường Cát Lái","Phường Thạnh Mỹ Lợi","Phường Thảo Điền","Phường Thủ Thiêm"],
        "Quận 3":["Phường 1","Phường 2","Phường 3","Phường 4","Phường 5","Phường 6","Phường 7","Phường 8","Phường 9","Phường 10","Phường 11","Phường 12","Phường 13","Phường 14"],
        "Quận 4":["Phường 1","Phường 2","Phường 3","Phường 4","Phường 5","Phường 6","Phường 8","Phường 9","Phường 10","Phường 12","Phường 13","Phường 14","Phường 15","Phường 16"],
        "Quận 5":["Phường 1","Phường 2","Phường 3","Phường 4","Phường 5","Phường 6","Phường 7","Phường 8","Phường 9","Phường 10","Phường 11","Phường 12","Phường 13","Phường 14","Phường 15","Phường 16"],
        "Quận 6":["Phường 1","Phường 2","Phường 3","Phường 4","Phường 5","Phường 6","Phường 7","Phường 8","Phường 9","Phường 10","Phường 11","Phường 12","Phường 13","Phường 14"],
        "Quận 7":["Phường Bình Thuận","Phường Phú Mỹ","Phường Phú Thuận","Phường Tân Hưng","Phường Tân Kiểng","Phường Tân Phong","Phường Tân Phú","Phường Tân Quy","Phường Tân Thuận Đông","Phường Tân Thuận Tây"],
        "Quận 8":["Phường 1","Phường 2","Phường 3","Phường 4","Phường 5","Phường 6","Phường 7","Phường 8","Phường 9","Phường 10","Phường 11","Phường 12","Phường 13","Phường 14","Phường 15","Phường 16"],
        "Quận 9":["Phường Hiệp Phú","Phường Long Bình","Phường Long Phước","Phường Long Thạnh Mỹ","Phường Long Trường","Phường Phú Hữu","Phường Phước Bình","Phường Phước Long A","Phường Phước Long B","Phường Tân Phú","Phường Tăng Nhơn Phú A","Phường Tăng Nhơn Phú B","Phường Trường Thạnh","Phường Trường Thọ"],
        "Quận 10":["Phường 1","Phường 2","Phường 3","Phường 4","Phường 5","Phường 6","Phường 7","Phường 8","Phường 9","Phường 10","Phường 11","Phường 12"],
        "Quận 11":["Phường 1","Phường 2","Phường 3","Phường 4","Phường 5","Phường 6","Phường 7","Phường 8","Phường 9","Phường 10","Phường 11","Phường 12","Phường 13","Phường 14","Phường 15","Phường 16"],
        "Quận 12":["Phường An Phú Đông","Phường Đông Hưng Thuận","Phường Hiệp Thành","Phường Tân Chánh Hiệp","Phường Tân Hưng Thuận","Phường Tân Thới Hiệp","Phường Tân Thới Nhất","Phường Thạnh Lộc","Phường Thạnh Xuân","Phường Thới An","Phường Trung Mỹ Tây","Phường Tân Chánh Hiệp","Phường Tân Hưng Thuận","Phường Tân Thới Hiệp","Phường Tân Thới Nhất","Phường Thạnh Lộc","Phường Thạnh Xuân","Phường Thới An","Phường Trung Mỹ Tây"],
        "Quận Bình Tân":["Phường Bình Hưng Hòa","Phường Bình Hưng Hoà A","Phường Bình Hưng Hoà B","Phường Bình Trị Đông","Phường Bình Trị Đông A","Phường Bình Trị Đông B","Phường Tân Tạo","Phường Tân Tạo A"],
        "Quận Bình Thạnh":["Phường 1","Phường 2","Phường 3","Phường 4","Phường 5","Phường 6","Phường 7","Phường 8","Phường 9","Phường 10","Phường 11","Phường 12","Phường 13","Phường 14","Phường 15","Phường 16"],
        "Quận Gò Vấp":["Phường 1","Phường 3","Phường 4","Phường 5","Phường 6","Phường 7","Phường 8","Phường 9","Phường 10","Phường 11","Phường 12","Phường 13","Phường 14","Phường 15","Phường 16"],
        "Quận Phú Nhuận":["Phường 1","Phường 2","Phường 3","Phường 4","Phường 5","Phường 7","Phường 8","Phường 9","Phường 10","Phường 11","Phường 12","Phường 13","Phường 14","Phường 15","Phường 17","Phường 19"],
        "Quận Tân Bình":["Phường 1","Phường 2","Phường 3","Phường 4","Phường 5","Phường 6","Phường 7","Phường 8","Phường 9","Phường 10","Phường 11","Phường 12","Phường 13","Phường 14","Phường 15"],
        "Quận Tân Phú":["Phường Tân Sơn Nhì","Phường Tây Thạnh","Phường Sơn Kỳ","Phường Tân Qúy","Phường Tân Thành","Phường Phú Thọ Hòa","Phường Phú Thạnh","Phường Phú Trung","Phường Hoà Thạnh","Phường Hiệp Tân","Phường Tân Thới Hoà"],
        "Quận Thủ Đức":["Phường Bình Chiểu","Phường Bình Thọ","Phường Hiệp Bình Chánh","Phường Hiệp Bình Phước","Phường Linh Chiểu","Phường Linh Đông","Phường Linh Tây","Phường Linh Trung","Phường Linh Xuân","Phường Tam Bình","Phường Tam Phú","Phường Trường Thọ"],
        "Huyện Bình Chánh":["Xã An Phú Tây","Xã Bình Chánh","Xã Bình Hưng","Xã Bình Lợi","Xã Đa Phước","Xã Hưng Long","Xã Lê Minh Xuân","Xã Phạm Văn Hai","Xã Phong Phú","Xã Quy Đức","Xã Tân Kiên","Xã Tân Nhựt","Xã Tân Quý Tây","Xã Vĩnh Lộc A","Xã Vĩnh Lộc B","Xã Vĩnh Phú"],
        "Huyện Cần Giờ":["Xã An Thới Đông", "Xã Bình Khánh", "Xã Cần Thạnh", "Xã Long Hòa"],
        "Huyện Củ Chi":["Xã An Nhơn Tây", "Xã An Phú", "Xã Bình Mỹ", "Xã Hòa Phú"],
        "Huyện Hóc Môn":["Xã Bà Điểm","Xã Đông Thạnh","Xã Hóc Môn","Xã Nhị Bình","Xã Tân Hiệp","Xã Tân Thới Nhì","Xã Tân Xuân","Xã Thới Tam Thôn","Xã Trung Chánh","Xã Xuân Thới Đông","Xã Xuân Thới Sơn"],
        "Huyện Nhà Bè":["Phường Nhà Bè","Phường Phú Xuân","Phường Phước Kiển","Phường Tân Phú","Phường Thuận Mỹ","Phường Hiệp Phước","Xã Long Thới","Xã Nhơn Đức"]
    };

var tinh = document.getElementById('tinh');
var content = document.getElementById('huyen');
var xa = document.getElementById('xa');

content.innerHTML = '<option value="">Quận/huyện</option>';
xa.innerHTML = '<option value="">Phường/xã</option>';

if (tinh.value === 'haNoi') {
var selectedTinh = quanHN[0];
var selectedPhuongXa = phuongXaHN[selectedTinh];

for (var i = 1; i < quanHN.length; i++) {
    var option = document.createElement('option');
    option.value = quanHN[i];
    option.text = quanHN[i];
    content.appendChild(option);
}

content.addEventListener('change', function() {
xa.innerHTML = '<option value="">Phường/xã</option>';

var selectedHuyen = content.value;
var phuongXa = phuongXaHN[selectedHuyen];

for (var j = 1; j < phuongXa.length; j++) {
    var option = document.createElement('option');
    option.value = phuongXa[j];
    option.text = phuongXa[j];
    xa.appendChild(option);
}
});
} else if(tinh.value === 'haGiang') {
    var selectedTinh = huyenHaGiang[0];
    var selectedPhuongXa = phuongXaHaGiang[selectedTinh];

    for (var i = 1; i < huyenHaGiang.length; i++) {
    var option = document.createElement('option');
    option.value = huyenHaGiang[i];
    option.text = huyenHaGiang[i];
    content.appendChild(option);
    }

    content.addEventListener('change', function() {
    xa.innerHTML = '<option value="">Phường/xã</option>';

    var selectedHuyen = content.value;
    var phuongXa = phuongXaHaGiang[selectedHuyen];

    for (var j = 1; j < phuongXa.length; j++) {
    var option = document.createElement('option');
    option.value = phuongXa[j];
    option.text = phuongXa[j];
    xa.appendChild(option);
}
});
}else if(tinh.value === 'caoBang') {
    var selectedTinh = huyenCB[0];
    var selectedPhuongXa = phuongXaCB[selectedTinh];

    for (var i = 1; i < huyenCB.length; i++) {
    var option = document.createElement('option');
    option.value = huyenCB[i];
    option.text = huyenCB[i];
    content.appendChild(option);
    }

    content.addEventListener('change', function() {
    xa.innerHTML = '<option value="">Phường/xã</option>';

    var selectedHuyen = content.value;
    var phuongXa = phuongXaCB[selectedHuyen];

    for (var j = 1; j < phuongXa.length; j++) {
    var option = document.createElement('option');
    option.value = phuongXa[j];
    option.text = phuongXa[j];
    xa.appendChild(option);
}
});
} else if(tinh.value === 'hoChiMinh') {
        var selectedTinh = quanHCM[0];
var selectedPhuongXa = phuongXaHCM[selectedTinh];

for (var i = 1; i < quanHCM.length; i++) {
    var option = document.createElement('option');
    option.value = quanHCM[i];
    option.text = quanHCM[i];
    content.appendChild(option);
}

content.addEventListener('change', function() {
xa.innerHTML = '<option value="">Phường/xã</option>';

var selectedHuyen = content.value;
var phuongXa = phuongXaHCM[selectedHuyen];

for (var j = 1; j < phuongXa.length; j++) {
    var option = document.createElement('option');
    option.value = phuongXa[j];
    option.text = phuongXa[j];
    xa.appendChild(option);
}
});
} else {
    content.innerHTML = '<option value="">Quận/huyện</option>';
}
};