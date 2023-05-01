//import imagetest from '../../assets/imagetest2.png'
//import Buttons from '../Button/index'
import Buttons from 'react-bootstrap/Button';
import css from './style.module.css'
import styled from 'styled-components'
import { forwardRef } from 'react';


const CardContainer = ({ className, imgsrc, title }, ref) => {
  return (
    <div className={className} ref={ref}>
      <div className={`card text-center ${css.cardTemplate}`}>
        <div className={`${css.overFlow}`}>
          <img src={imgsrc} alt="imgtest" className="card-img-top" />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">{title}</h4>
          <p className="card-text text-secondary">
            silahkan komentar sebanyak mungkin selama itu diperbolehkan
            dan tidak ada yang melarang. Karena kita manusia wajib berpendapat
          </p>
          <Buttons>Go Anywhere</Buttons>
        </div>
      </div>
    </div>
  )
}

const refCards = forwardRef(CardContainer)

export default styled(refCards)`
  @import url('./style.module.css');
`

