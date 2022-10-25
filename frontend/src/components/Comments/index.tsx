import { useState } from 'react'
import SeeMoreButton from '../SeeMoreButton'
import * as S from './styles'

export function Comments() {
  // States and functions to deal with the See more button
  const [smallerSlice, setSmallerSlice] = useState(true)
  const [seeMoreButtonStatus, setSeeMoreButtonStatus] = useState(false)

  function toggleSliceSize() {
    setSmallerSlice((prevState) => !prevState)
    setSeeMoreButtonStatus((prevState) => !prevState)
  }

  const comments: Array<any> = [
    {
      imgSrc: '/testando.jpg',
      name: 'Daniel Cazé',
      commentary:
        '  transar de ladinho é mt poggers a piroca entrando e saindo kekw ai tu da uma segurada no peitinho e dale na metelancia mid gap only bota a mão no pescocinho dela e tome micro dif o foda eh so quando o dick escapa da pussy ai é omegalul total.',
    },
    {
      imgSrc: '/testando.jpg',
      name: 'Daniel Cazé',
      commentary:
        '  transar de ladinho é mt poggers a piroca entrando e saindo kekw ai tu da uma segurada no peitinho e dale na metelancia mid gap only bota a mão no pescocinho dela e tome micro dif o foda eh so quando o dick escapa da pussy ai é omegalul total.',
    },
    {
      imgSrc: '/testando.jpg',
      name: 'Daniel Cazé',
      commentary:
        '  transar de ladinho é mt poggers a piroca entrando e saindo kekw ai tu da uma segurada no peitinho e dale na metelancia mid gap only bota a mão no pescocinho dela e tome micro dif o foda eh so quando o dick escapa da pussy ai é omegalul total.',
    },
    {
      imgSrc: '/testando.jpg',
      name: 'Daniel Cazé',
      commentary:
        '  transar de ladinho é mt poggers a piroca entrando e saindo kekw ai tu da uma segurada no peitinho e dale na metelancia mid gap only bota a mão no pescocinho dela e tome micro dif o foda eh so quando o dick escapa da pussy ai é omegalul total.',
    },
    {
      imgSrc: '/testando.jpg',
      name: 'Daniel Cazé',
      commentary:
        '  transar de ladinho é mt poggers a piroca entrando e saindo kekw ai tu da uma segurada no peitinho e dale na metelancia mid gap only bota a mão no pescocinho dela e tome micro dif o foda eh so quando o dick escapa da pussy ai é omegalul total.',
    },
    {
      imgSrc: '/testando.jpg',
      name: 'Daniel Cazé',
      commentary:
        '  transar de ladinho é mt poggers a piroca entrando e saindo kekw ai tu da uma segurada no peitinho e dale na metelancia mid gap only bota a mão no pescocinho dela e tome micro dif o foda eh so quando o dick escapa da pussy ai é omegalul total.',
    },
  ]
  return (
    <S.CommentsWrapper>
      <strong>Comentários</strong>
      {comments?.slice(0, smallerSlice ? 3 : 6).map((item) => (
        <article key={item.commentary}>
          <img src={item.imgSrc} alt="" />
          <div id="commentary">
            <p>{item.name}</p>
            <span>{item.commentary}</span>
          </div>
        </article>
      ))}
      <SeeMoreButton
        onClick={toggleSliceSize}
        seeMoreButtonStatus={seeMoreButtonStatus}
      />
    </S.CommentsWrapper>
  )
}
