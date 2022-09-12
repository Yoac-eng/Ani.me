import * as S from './styles'

export function Comments() {
    const comments: Array<any> = [{imgSrc: "testando.jpg", name: "Daniel Cazé"}]
    return (
        <S.CommentsWrapper>
            <strong>Comentários</strong>
            {
                comments.map(item => (
                    <article>
                        <img src={item.imgSrc} />
                        <div id="commentary">
                            <p>{item.name}</p>
                            <span>
                                Episodio muito top, já voltou muito bom!
                            </span>
                        </div>
                    </article>
                ))
              }
            {/* Arrumar esse hr de forma que ele fique dividindo cada comentario novo */}
            <hr/>
            <a href="#" className="button">
                    Ver mais
            </a>
        </S.CommentsWrapper>
    )
}