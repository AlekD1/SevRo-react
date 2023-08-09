
import '../Form-slice/form.scss';

function FormSlice() {
    return (
        < div className="Form-slice" >
            <div className="container Form-slice-container">
                <div className="Form-slice__form">
                    <div className="Form-slice__form__header">Сотрудничество</div>
                    <div className="Form-slice__form__title"> Если вам нужны молодые специалисты</div>
                    <div className="Form-slice__form__description">Вы можете присылать заявки по форме</div>
                    <form action='#'>
                        <input type="text" placeholder="Ваше имя" name="email" required></input>
                        <input type="password" placeholder="Ваша почта" name="psw" required></input>
                        <textarea type="message" placeholder="Ваше сообщение" name="msg" required></textarea>
                        <div className="Form-slice__form__button">
                            <button className="Form-slice__form__button__stylebtn" type="submit">
                                Отправить
                                <img src="./img/arrow-right.png"></img>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="Form-slice__partners">
                    В разработке
                </div>
            </div>
        </div >
    );
}

export default FormSlice;