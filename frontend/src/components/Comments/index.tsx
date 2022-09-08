import * as S from './styles'

export function Comments() {
    const comments: Array<any> = []
    return (
        <S.CommentsWrapper>
            <strong>Comentarios</strong>
            {
                comments.map(item => (
                    <article>
                        <img src={item.imgSrc} />
                        <div>
                            <p>{item.name}</p>
                            <span>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatem nostrum rem natus in libero molestias quod dolorum vero ex maiores distinctio, adipisci explicabo, similique illo? Atque natus iure voluptates!
                            </span>
                        </div>
                    </article>
                ))
            }
        </S.CommentsWrapper>
    )
}