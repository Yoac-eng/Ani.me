import { Link } from 'react-router-dom'
import * as S from './styles'

export function Comments() {
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
  ]
  return (
    <S.CommentsWrapper>
      <strong>Comentários</strong>
      {comments.map((item) => (
        <article key={item.commentary}>
          <img src={item.imgSrc} alt="" />
          <div id="commentary">
            <p>{item.name}</p>
            <span>{item.commentary}</span>
          </div>
        </article>
      ))}
      <Link to="#" className="button">
        Ver mais
      </Link>
    </S.CommentsWrapper>
  )
}
