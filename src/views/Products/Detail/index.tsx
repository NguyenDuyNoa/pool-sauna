import React from 'react'
// import { useParams } from 'react-router-dom'
import { Typography, Grid, Box, Chip, Button } from '@mui/material'
import { Pool, Timer, Architecture, Engineering, CheckCircle } from '@mui/icons-material'

const DetailProduct = () => {
  // Giả lập dữ liệu sản phẩm (sau này có thể lấy từ API)
  const product = {
    title: 'Hồ Bơi Vô Cực Ocean View',
    description: 'Thiết kế hồ bơi vô cực với tầm nhìn ra biển, tích hợp công nghệ lọc nước tiên tiến và hệ thống đèn LED thông minh.',
    features: [
      'Diện tích: 120m²',
      'Độ sâu: 1.2m - 1.8m',
      'Hệ thống lọc: Công nghệ UV',
      'Vật liệu: Gạch mosaic cao cấp'
    ],
    images: ['/pool1.jpg', '/pool2.jpg', '/pool3.jpg']
  }

  return (
    <Box sx={{ p: 4 }}>
      {/* Phần header */}
      <Typography variant="h3" gutterBottom>
        {product.title}
      </Typography>

      {/* Grid layout cho hình ảnh và thông tin */}
      <Grid container spacing={4}>
        {/* Phần hình ảnh */}
        <Grid item xs={12} md={7}>
          <Box
            component="img"
            src={product.images[0]}
            alt={product.title}
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
              boxShadow: 3
            }}
          />
        </Grid>

        {/* Phần thông tin chi tiết */}
        <Grid item xs={12} md={5}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Mô tả
            </Typography>
            <Typography>{product.description}</Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Đặc điểm nổi bật
            </Typography>
            {product.features.map((feature, index) => (
              <Chip
                key={index}
                icon={<CheckCircle />}
                label={feature}
                sx={{ m: 0.5 }}
                color="primary"
              />
            ))}
          </Box>

          {/* Các icon thể hiện dịch vụ */}
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={6}>
              <Box display="flex" alignItems="center">
                <Pool color="primary" />
                <Typography sx={{ ml: 1 }}>Thiết kế hồ bơi</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box display="flex" alignItems="center">
                <Timer color="primary" />
                <Typography sx={{ ml: 1 }}>Thi công nhanh chóng</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box display="flex" alignItems="center">
                <Architecture color="primary" />
                <Typography sx={{ ml: 1 }}>Thiết kế chuyên nghiệp</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box display="flex" alignItems="center">
                <Engineering color="primary" />
                <Typography sx={{ ml: 1 }}>Bảo hành dài hạn</Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Nút liên hệ */}
          <Button
            variant="contained"
            size="large"
            fullWidth
            sx={{ mt: 2 }}
          >
            Liên hệ tư vấn
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default DetailProduct
