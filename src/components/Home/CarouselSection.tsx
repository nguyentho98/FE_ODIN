"use client"
import Link from "next/link"
import Slider from "react-slick"
import { Carousel } from "react-bootstrap"
import { useState } from "react"

const CarouselTab = () => {
    const [index, setIndex] = useState(0)
    const handleSelect = (selectedIndex: any) => {
        setIndex(selectedIndex)
    }
    return (
        <section className="events__area pt-50 pb-50 mb-50 p-relative">
            <div className="events__shape">
                <img
                    className="events-1-shape"
                    src="assets/img/events/events-shape.png"
                    alt="img not found"
                />
            </div>
            <div className="container events__carousel">
                <div className="events__carousel-content">
                    <span className="events__carousel-description">Trung tâm ngoại ngữ</span>

                    <Link
                        href="/"
                        className="events__carousel-logo pb-5 pr-5 mt-10"
                    >
                        <img
                            src="assets/img/logo/odin-logo-login.png"
                            alt="img not found"
                            style={{width:"100%"}}
                        />
                    </Link>
                    <div className="events__carousel-text mt-50">
                        <span>
                            Odin Language Academy vô cùng tự hào về sản phẩm BBST (công nghệ Anh văn siêu tốc) được ứng
                            dụng và triển khai trên cộng đồng, đó cũng là mong muốn mà chúng tôi muốn hàng triệu người
                            Việt trên toàn quốc được làm quen, hội nhập với những phương pháp, công nghệ mà do người
                            Việt tạo ra cho người Việt sử dụng.
                        </span>
                    </div>
                    <Link
                        href="/course-grid"
                        className="e-btn mt-10"
                    >
                        Tìm hiểu thêm
                    </Link>
                </div>
                <div className="events__carousel-items">
                    <Carousel
                        activeIndex={index}
                        onSelect={handleSelect}
                    >
                        <Carousel.Item>
                            {/* <ExampleCarouselImage text="First slide" /> */}
                            <img
                                src="assets/img/carousel/hoc-vien-odin-1024x576.jpg"
                                className="w-100"
                            ></img>
                        </Carousel.Item>

                        <Carousel.Item>
                            {/* <ExampleCarouselImage text="Third slide" /> */}
                            <img
                                src="assets/img/carousel/trung-tam-tieng-anh-odin-1024x576.jpg"
                                className="w-100"
                            ></img>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default CarouselTab
