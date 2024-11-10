function MainFeatureDelivery() {

  const features = [
    {
      imgSrc: '/Img/deliveryDescription/machine.svg',
      title: 'Free Delivery',
      text: 'Worldwide delivery on all. Authoritatively morph next-generation innovation with extensive models.',
    },
    {
      imgSrc: '/Img/deliveryDescription/discount.svg',
      title: 'Sales & discounts',
      text: 'Worldwide delivery on all. Authoritatively morph next-generation innovation with extensive models.',
    },
    {
      imgSrc: '/Img/deliveryDescription/crown.svg',
      title: 'Quality assurance',
      text: 'Worldwide delivery on all. Authoritatively morph next-generation innovation with extensive models.',
    },
  ];

  const Feature = ({ imgSrc, title, text }) => (
    <div className="main__feature__delivery">
      <img src={imgSrc} alt={title.toLowerCase()} className="feature__machine__img" />
      <h2 className="main__feature__machine__title">{title}</h2>
      <p className="main__feature__machine__text">{text}</p>
    </div>
  );

  return (
    <>
      {features.map((feature, index) => (
        <Feature key={index} imgSrc={feature.imgSrc} title={feature.title} text={feature.text} />
      ))}
    </>
  );
};

export default MainFeatureDelivery;