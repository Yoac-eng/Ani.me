import React, { FormEvent, useState } from 'react'
import SeeMoreButton from '../SeeMoreButton'
import * as S from './styles'
import profilePicture from '../../assets/profilePicture.jpg'

export function Comments() {
  // States and functions to deal with the See more button
  const numberOfItemsOnScreen = 2
  const [showItems, setShowItems] = useState(numberOfItemsOnScreen)

  function toggleSliceSize() {
    setShowItems((prev) => prev + numberOfItemsOnScreen)
  }

  const [comments, setComments]: Array<any> = useState([
    {
      id: 1,
      imgSrc: profilePicture,
      name: 'Anonymous',
      commentary: `OOOOOOOOOO EM 58 FOI PELE 🇧🇷🇧🇷🇧🇷🇧🇷🇧🇷🇧🇷 EM MEIA DOIS FOI O MANE 🙀🙀🙀🙀🙀 EM SETE ZERO O ESQUADRÃO😰😰😰😰😰😰 PRIMEIRO A SER TRICAMPEÃO🏆🏆🏆 EM 94 ROMARIOOOOOO EM 2005 FENÔMENO 😁😁😁😁😁😁 PRIMEIRO A SER PENTACAMPEÃO 🏆🏆🏆🏆🏆 UNICO A SER O BRALSIZÃO🇧🇷🇧🇷🇧🇷🇧🇷🇧🇷🇧🇷🇧🇷 `,
    },
    {
      id: 2,
      imgSrc: profilePicture,
      name: 'Anonymous',
      commentary: 'Ye thats mid xD',
    },
    {
      id: 3,
      imgSrc: profilePicture,
      name: 'Anonymous',
      commentary: 'FIREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE.',
    },
    {
      id: 4,
      imgSrc: profilePicture,
      name: 'Anonymous',
      commentary: 'BRO THAT ANIME IS FIRE LOL.',
    },
  ])
  const [commentary, setCommentary] = useState('')
  const [name, setName] = useState('')

  function resetInputs() {
    setCommentary('')
    setName('')
  }

  function addCommentary(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (commentary !== '') {
      const newComment = {
        id: comments.length + 1,
        imgSrc: profilePicture,
        name: name || 'Anonymous',
        commentary,
      }
      setComments((array: any) => [newComment, ...array])
      resetInputs()
    } else {
      alert('Seu comentário não pode estar vazio!')
    }
  }

  return (
    <S.CommentsWrapper>
      <strong>Comentários</strong>
      <form onSubmit={addCommentary} className="commentary-form">
        <label htmlFor="name">Nome: </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="textarea">Comentário*: </label>
        <textarea
          required
          id="commentary"
          name="commentary"
          rows={5}
          cols={33}
          placeholder="Deixe sua opinião!"
          value={commentary}
          onChange={(e) => setCommentary(e.target.value)}
        ></textarea>
        <button id="comment-button" type="submit">
          Comentar
        </button>
      </form>

      {comments?.slice(0, showItems).map((item: any) => {
        return (
          <article key={item.commentary}>
            <img src={item.imgSrc} alt="" />
            <div id="commentary">
              <p>{item.name}</p>
              <span>{item.commentary}</span>
            </div>
          </article>
        )
      })}
      {comments.length > showItems && (
        <SeeMoreButton onClick={toggleSliceSize} />
      )}
    </S.CommentsWrapper>
  )
}
