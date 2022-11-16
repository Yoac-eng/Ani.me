import { useState } from 'react'
import SeeMoreButton from '../SeeMoreButton'
import * as S from './styles'
import profilePicture from '../../assets/profilePicture.jpg'

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
      imgSrc: profilePicture,
      name: 'Daniel Cazé',
      commentary:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum eius perferendis deserunt nisi tempora pariatur ipsa. Perferendis mollitia molestiae impedit officia. Tempore sed nesciunt minus quod, porro reprehenderit laboriosam eos.',
    },
    {
      imgSrc: profilePicture,
      name: 'Daniel Cazé',
      commentary:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum eius perferendis deserunt nisi tempora pariatur ipsa. Perferendis mollitia molestiae impedit officia. Tempore sed nesciunt minus quod, porro reprehenderit laboriosam eos.',
    },
    {
      imgSrc: profilePicture,
      name: 'Daniel Cazé',
      commentary:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum eius perferendis deserunt nisi tempora pariatur ipsa. Perferendis mollitia molestiae impedit officia. Tempore sed nesciunt minus quod, porro reprehenderit laboriosam eos.',
    },
    {
      imgSrc: profilePicture,
      name: 'Daniel Cazé',
      commentary:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum eius perferendis deserunt nisi tempora pariatur ipsa. Perferendis mollitia molestiae impedit officia. Tempore sed nesciunt minus quod, porro reprehenderit laboriosam eos.',
    },
    {
      imgSrc: profilePicture,
      name: 'Daniel Cazé',
      commentary:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum eius perferendis deserunt nisi tempora pariatur ipsa. Perferendis mollitia molestiae impedit officia. Tempore sed nesciunt minus quod, porro reprehenderit laboriosam eos.',
    },
    {
      imgSrc: profilePicture,
      name: 'Daniel Cazé',
      commentary:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum eius perferendis deserunt nisi tempora pariatur ipsa. Perferendis mollitia molestiae impedit officia. Tempore sed nesciunt minus quod, porro reprehenderit laboriosam eos.',
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
