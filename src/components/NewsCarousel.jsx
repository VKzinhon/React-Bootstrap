import React from 'react';
import { Carousel, Button, Container } from 'react-bootstrap';

const NewsCarousel = ({ slides }) => {
  return (
    <Container fluid className="px-0 mb-4">
      <Carousel fade interval={5000}>
        {slides.map((slide) => (
          <Carousel.Item key={slide.id}>
            <div
              className="d-flex align-items-center justify-content-center text-white p-5"
              style={{
                height: '380px',
                backgroundImage: `linear-gradient(rgba(0, 29, 133, 0.75), rgba(0, 0, 0, 0.85)), url(${slide.imagem})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center h-100">
                <h2 className="fw-bold mb-3">{slide.titulo}</h2>
                <p className="lead fs-6 text-light max-w-75 mb-4">{slide.descricao}</p>
                <Button variant="warning" size="md" href={slide.link} className="fw-bold px-4">
                  Saber Mais
                </Button>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default NewsCarousel;