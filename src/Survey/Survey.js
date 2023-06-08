import React, { Component } from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

var uuid = require('uuid')

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class Survey extends Component {

    onSubmit(event) {
        var isim = this.refs.isim.value;
        this.setState({ İsim: isim }, function () {
        })
    }

    surveySubmit(event) {
        event.preventDefault();
        firebase.database().ref('Deli Raporu/' + this.state.İsim).set({
            id: this.state.id,
            cevaplar: this.state.Cevaplar,
            toplam: this.state.toplam
        })
        this.setState({ isSubmitted: true })
    }

    answerSelected(event) {
        var cevaplar = this.state.Cevaplar
        var toplam = this.state.toplam
        const plusArr = []

        if (event.target.name === 'cevap1') {
            cevaplar.cevap1 = event.target.value
        } else if (event.target.name === 'cevap2') {
            cevaplar.cevap2 = event.target.value
        } else if (event.target.name === 'cevap3') {
            cevaplar.cevap3 = event.target.value
        } else if (event.target.name === 'cevap4') {
            cevaplar.cevap4 = event.target.value
        } else if (event.target.name === 'cevap5') {
            cevaplar.cevap5 = event.target.value
        } else if (event.target.name === 'cevap6') {
            cevaplar.cevap6 = event.target.value
        } else if (event.target.name === 'cevap7') {
            cevaplar.cevap7 = event.target.value
        } else if (event.target.name === 'cevap8') {
            cevaplar.cevap8 = event.target.value
        } else if (event.target.name === 'cevap9') {
            cevaplar.cevap9 = event.target.value
        } else if (event.target.name === 'cevap10') {
            cevaplar.cevap10 = event.target.value
        } else if (event.target.name === 'cevap11') {
            cevaplar.cevap11 = event.target.value
        } else if (event.target.name === 'cevap12') {
            cevaplar.cevap12 = event.target.value
        } else if (event.target.name === 'cevap13') {
            cevaplar.cevap13 = event.target.value
        } else if (event.target.name === 'cevap14') {
            cevaplar.cevap14 = event.target.value
        } else if (event.target.name === 'cevap15') {
            cevaplar.cevap15 = event.target.value
        } else if (event.target.name === 'cevap16') {
            cevaplar.cevap16 = event.target.value
        } else if (event.target.name === 'cevap17') {
            cevaplar.cevap17 = event.target.value
        } else if (event.target.name === 'cevap18') {
            cevaplar.cevap18 = event.target.value
        } else if (event.target.name === 'cevap19') {
            cevaplar.cevap19 = event.target.value
        } else if (event.target.name === 'cevap20') {
            cevaplar.cevap20 = event.target.value
        } else if (event.target.name === 'cevap21') {
            cevaplar.cevap21 = event.target.value
        } else if (event.target.name === 'cevap22') {
            cevaplar.cevap22 = event.target.value
        } else if (event.target.name === 'cevap23') {
            cevaplar.cevap23 = event.target.value
        } else if (event.target.name === 'cevap24') {
            cevaplar.cevap24 = event.target.value
        } else if (event.target.name === 'cevap25') {
            cevaplar.cevap25 = event.target.value
        }

        /* if ((plusArr.length) === 25) {
            for (let i = 0; i < 25; i++) {
                plusArrToplam += plusArr[i]
            }
            plus = plusArrToplam.toString()
        } */

        let cevap = Object.values(cevaplar)
        toplam = parseInt(cevap[0])
        for (let i = 1; i < 25; i++) {
            cevap[i] = parseInt(cevap[i])
            if (!(isNaN(cevap[i]))) {
                plusArr.push(cevap[i])
                toplam = toplam + cevap[i]
            }
        }

        this.setState({ cevaplar })
        this.setState({ toplam })
    }
    constructor(props) {
        super(props);

        this.state = {
            id: uuid.v1(),
            İsim: '',
            Cevaplar: {
                cevap1: '',
                cevap2: '',
                cevap3: '',
                cevap4: '',
                cevap5: '',
                cevap6: '',
                cevap7: '',
                cevap8: '',
                cevap9: '',
                cevap10: '',
                cevap11: '',
                cevap12: '',
                cevap13: '',
                cevap14: '',
                cevap15: '',
                cevap16: '',
                cevap17: '',
                cevap18: '',
                cevap19: '',
                cevap20: '',
                cevap21: '',
                cevap22: '',
                cevap23: '',
                cevap24: '',
                cevap25: ''
            },
            toplam: 0,
            isSubmitted: false
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.surveySubmit = this.surveySubmit.bind(this)
        this.answerSelected = this.answerSelected.bind(this)
    }

    render() {

        var isim = ''
        var cevaplar = ''
        var toplamlar = ''

        if (this.state.İsim === '' && this.state.isSubmitted === false) {
            isim = <div>
                <h1>İsminizi girin.</h1>

                <form onSubmit={this.onSubmit}>
                    <input className="isim" type="text" placeholder='İsminizi girin.' ref='isim' />
                </form>
            </div>
        }
        else if (this.state.İsim !== '' && this.state.isSubmitted === false) {
            isim = <div>
                <h1>Merhaba {this.state.İsim}</h1>
            </div>
            cevaplar = <div>
                <h2>SORULAR</h2>
                <form onSubmit={this.surveySubmit}>

                    <h2>Düşünceler ve Duygular</h2>
                    <div className="sorular">
                        <label>Üzüntülü ya da neşesiz hissetmek</label><br />
                        <input type="radio" name="cevap1" value="0" onChange={this.answerSelected} />0
                        <input type="radio" name="cevap1" value="1" onChange={this.answerSelected} />1
                        <input type="radio" name="cevap1" value="2" onChange={this.answerSelected} />2
                        <input type="radio" name="cevap1" value="3" onChange={this.answerSelected} />3
                        <input type="radio" name="cevap1" value="4" onChange={this.answerSelected} />4
                    </div>

                    <div className="sorular">
                        <label>Mutsuz ya da umutsuz hissetmek</label><br />
                        <input type="radio" name="cevap2" value="0" onChange={this.answerSelected} />0
                        <input type="radio" name="cevap2" value="1" onChange={this.answerSelected} />1
                        <input type="radio" name="cevap2" value="2" onChange={this.answerSelected} />2
                        <input type="radio" name="cevap2" value="3" onChange={this.answerSelected} />3
                        <input type="radio" name="cevap2" value="4" onChange={this.answerSelected} />4
                    </div>

                    <div className="sorular">
                        <label>Ağlama nöbetleri ve ağlamaklı olma</label><br />
                        <input type="radio" name="cevap3" value="0" onChange={this.answerSelected} />0
                        <input type="radio" name="cevap3" value="1" onChange={this.answerSelected} />1
                        <input type="radio" name="cevap3" value="2" onChange={this.answerSelected} />2
                        <input type="radio" name="cevap3" value="3" onChange={this.answerSelected} />3
                        <input type="radio" name="cevap3" value="4" onChange={this.answerSelected} />4
                    </div>

                    <div className="sorular">
                        <label>Cesaretsiz hissetmek</label><br />
                        <input type="radio" name="cevap4" value="0" onChange={this.answerSelected} />0
                        <input type="radio" name="cevap4" value="1" onChange={this.answerSelected} />1
                        <input type="radio" name="cevap4" value="2" onChange={this.answerSelected} />2
                        <input type="radio" name="cevap4" value="3" onChange={this.answerSelected} />3
                        <input type="radio" name="cevap4" value="4" onChange={this.answerSelected} />4
                    </div>

                    <div className="sorular">
                        <label>Çaresiz hissetmek</label><br />
                        <input type="radio" name="cevap5" value="0" onChange={this.answerSelected} />0
                        <input type="radio" name="cevap5" value="1" onChange={this.answerSelected} />1
                        <input type="radio" name="cevap5" value="2" onChange={this.answerSelected} />2
                        <input type="radio" name="cevap5" value="3" onChange={this.answerSelected} />3
                        <input type="radio" name="cevap5" value="4" onChange={this.answerSelected} />4
                    </div>

                    <div className="sorular">
                        <label>Düşük özgüven</label><br />
                        <input type="radio" name="cevap6" value="0" onChange={this.answerSelected} />0
                        <input type="radio" name="cevap6" value="1" onChange={this.answerSelected} />1
                        <input type="radio" name="cevap6" value="2" onChange={this.answerSelected} />2
                        <input type="radio" name="cevap6" value="3" onChange={this.answerSelected} />3
                        <input type="radio" name="cevap6" value="4" onChange={this.answerSelected} />4
                    </div>

                    <div className="sorular">
                        <label>Değersiz ve yetersiz hissetmek</label><br />
                        <input type="radio" name="cevap7" value="0" onChange={this.answerSelected} />0
                        <input type="radio" name="cevap7" value="1" onChange={this.answerSelected} />1
                        <input type="radio" name="cevap7" value="2" onChange={this.answerSelected} />2
                        <input type="radio" name="cevap7" value="3" onChange={this.answerSelected} />3
                        <input type="radio" name="cevap7" value="4" onChange={this.answerSelected} />4
                    </div>

                    <div className="sorular">
                        <label>Suçluluk ya da utanç</label><br />
                        <input type="radio" name="cevap8" value="0" onChange={this.answerSelected} />0
                        <input type="radio" name="cevap8" value="1" onChange={this.answerSelected} />1
                        <input type="radio" name="cevap8" value="2" onChange={this.answerSelected} />2
                        <input type="radio" name="cevap8" value="3" onChange={this.answerSelected} />3
                        <input type="radio" name="cevap8" value="4" onChange={this.answerSelected} />4
                    </div>

                    <div className="sorular">
                        <label>Kendinizi eleştirmek ya da kendinizi suçlamak</label><br />
                        <input type="radio" name="cevap9" value="0" onChange={this.answerSelected} />0
                        <input type="radio" name="cevap9" value="1" onChange={this.answerSelected} />1
                        <input type="radio" name="cevap9" value="2" onChange={this.answerSelected} />2
                        <input type="radio" name="cevap9" value="3" onChange={this.answerSelected} />3
                        <input type="radio" name="cevap9" value="4" onChange={this.answerSelected} />4
                    </div>

                    <div className="sorular">
                        <label>Karar vermede güçlük</label><br />
                        <input type="radio" name="cevap10" value="0" onChange={this.answerSelected} />0
                        <input type="radio" name="cevap10" value="1" onChange={this.answerSelected} />1
                        <input type="radio" name="cevap10" value="2" onChange={this.answerSelected} />2
                        <input type="radio" name="cevap10" value="3" onChange={this.answerSelected} />3
                        <input type="radio" name="cevap10" value="4" onChange={this.answerSelected} />4
                    </div>

                    <br />

                    <h2>Aktiviteler ve Kişisel İlişkiler</h2>
                    <div className="sorular">
                        <label>Aile, arkadaşlar ve iş arkadaşlarına yönelik ilgi kaybı</label><br />
                        <input type="radio" name="cevap11" value="0" onChange={this.answerSelected} />0
                        <input type="radio" name="cevap11" value="1" onChange={this.answerSelected} />1
                        <input type="radio" name="cevap11" value="2" onChange={this.answerSelected} />2
                        <input type="radio" name="cevap11" value="3" onChange={this.answerSelected} />3
                        <input type="radio" name="cevap11" value="4" onChange={this.answerSelected} />4
                    </div>

                    <div className="sorular">
                        <label>Yalnızlık</label><br />
                        <input type="radio" name="cevap12" value="0" onChange={this.answerSelected} />0
                        <input type="radio" name="cevap12" value="1" onChange={this.answerSelected} />1
                        <input type="radio" name="cevap12" value="2" onChange={this.answerSelected} />2
                        <input type="radio" name="cevap12" value="3" onChange={this.answerSelected} />3
                        <input type="radio" name="cevap12" value="4" onChange={this.answerSelected} />4
                    </div>

                    <div className="sorular">
                        <label>Aile ya da arkadaşlarla daha az zaman geçirme</label><br />
                        <input type="radio" name="cevap13" value="0" onChange={this.answerSelected} />0
                        <input type="radio" name="cevap13" value="1" onChange={this.answerSelected} />1
                        <input type="radio" name="cevap13" value="2" onChange={this.answerSelected} />2
                        <input type="radio" name="cevap13" value="3" onChange={this.answerSelected} />3
                        <input type="radio" name="cevap13" value="4" onChange={this.answerSelected} />4
                    </div>

                    <div className="sorular">
                        <label>Motivasyon eksikliği</label><br />
                        <input type="radio" name="cevap14" value="0" onChange={this.answerSelected} />0
                        <input type="radio" name="cevap14" value="1" onChange={this.answerSelected} />1
                        <input type="radio" name="cevap14" value="2" onChange={this.answerSelected} />2
                        <input type="radio" name="cevap14" value="3" onChange={this.answerSelected} />3
                        <input type="radio" name="cevap14" value="4" onChange={this.answerSelected} />4
                    </div>

                    <div className="sorular">
                        <label>İşte ve diğer aktivitelerde ilgi kaybı</label><br />
                        <input type="radio" name="cevap15" value="0" onChange={this.answerSelected} />0
                        <input type="radio" name="cevap15" value="1" onChange={this.answerSelected} />1
                        <input type="radio" name="cevap15" value="2" onChange={this.answerSelected} />2
                        <input type="radio" name="cevap15" value="3" onChange={this.answerSelected} />3
                        <input type="radio" name="cevap15" value="4" onChange={this.answerSelected} />4
                    </div>

                    <div className="sorular">
                        <label>İş ve diğer aktivitelerden kaçınma</label><br />
                        <input type="radio" name="cevap16" value="0" onChange={this.answerSelected} />0
                        <input type="radio" name="cevap16" value="1" onChange={this.answerSelected} />1
                        <input type="radio" name="cevap16" value="2" onChange={this.answerSelected} />2
                        <input type="radio" name="cevap16" value="3" onChange={this.answerSelected} />3
                        <input type="radio" name="cevap16" value="4" onChange={this.answerSelected} />4
                    </div>

                    <div className="sorular">
                        <label>Yaşamdan zevk alma ve tatmin olmanın kaybı</label><br />
                        <input type="radio" name="cevap17" value="0" onChange={this.answerSelected} />0
                        <input type="radio" name="cevap17" value="1" onChange={this.answerSelected} />1
                        <input type="radio" name="cevap17" value="2" onChange={this.answerSelected} />2
                        <input type="radio" name="cevap17" value="3" onChange={this.answerSelected} />3
                        <input type="radio" name="cevap17" value="4" onChange={this.answerSelected} />4
                    </div>

                    <br />

                    <h2>Fiziksel Belirtiler</h2>
                    <div className="sorular">
                        <label>Yorgun hissetmek</label><br />
                        <input type="radio" name="cevap18" value="0" onChange={this.answerSelected} />0
                        <input type="radio" name="cevap18" value="1" onChange={this.answerSelected} />1
                        <input type="radio" name="cevap18" value="2" onChange={this.answerSelected} />2
                        <input type="radio" name="cevap18" value="3" onChange={this.answerSelected} />3
                        <input type="radio" name="cevap18" value="4" onChange={this.answerSelected} />4
                    </div>

                    <div className="sorular">
                        <label>Uykuya dalmada güçlük ya da çok fazla uyumak</label><br />
                        <input type="radio" name="cevap19" value="0" onChange={this.answerSelected} />0
                        <input type="radio" name="cevap19" value="1" onChange={this.answerSelected} />1
                        <input type="radio" name="cevap19" value="2" onChange={this.answerSelected} />2
                        <input type="radio" name="cevap19" value="3" onChange={this.answerSelected} />3
                        <input type="radio" name="cevap19" value="4" onChange={this.answerSelected} />4
                    </div>

                    <div className="sorular">
                        <label>Azalmış ya da artmış iştah</label><br />
                        <input type="radio" name="cevap20" value="0" onChange={this.answerSelected} />0
                        <input type="radio" name="cevap20" value="1" onChange={this.answerSelected} />1
                        <input type="radio" name="cevap20" value="2" onChange={this.answerSelected} />2
                        <input type="radio" name="cevap20" value="3" onChange={this.answerSelected} />3
                        <input type="radio" name="cevap20" value="4" onChange={this.answerSelected} />4
                    </div>

                    <div className="sorular">
                        <label>Cinsel istek kaybı</label><br />
                        <input type="radio" name="cevap21" value="0" onChange={this.answerSelected} />0
                        <input type="radio" name="cevap21" value="1" onChange={this.answerSelected} />1
                        <input type="radio" name="cevap21" value="2" onChange={this.answerSelected} />2
                        <input type="radio" name="cevap21" value="3" onChange={this.answerSelected} />3
                        <input type="radio" name="cevap21" value="4" onChange={this.answerSelected} />4
                    </div>

                    <div className="sorular">
                        <label>Sağlığınız hakkında endişelenme</label><br />
                        <input type="radio" name="cevap22" value="0" onChange={this.answerSelected} />0
                        <input type="radio" name="cevap22" value="1" onChange={this.answerSelected} />1
                        <input type="radio" name="cevap22" value="2" onChange={this.answerSelected} />2
                        <input type="radio" name="cevap22" value="3" onChange={this.answerSelected} />3
                        <input type="radio" name="cevap22" value="4" onChange={this.answerSelected} />4
                    </div>

                    <br />

                    <h2>İntihar İsteği</h2>
                    <div className="sorular">
                        <label>İntihar düşünceniz var mı?</label><br />
                        <input type="radio" name="cevap23" value="0" onChange={this.answerSelected} />0
                        <input type="radio" name="cevap23" value="1" onChange={this.answerSelected} />1
                        <input type="radio" name="cevap23" value="2" onChange={this.answerSelected} />2
                        <input type="radio" name="cevap23" value="3" onChange={this.answerSelected} />3
                        <input type="radio" name="cevap23" value="4" onChange={this.answerSelected} />4
                    </div>

                    <div className="sorular">
                        <label>Yaşamınızı sona erdirmek ister misiniz?</label><br />
                        <input type="radio" name="cevap24" value="0" onChange={this.answerSelected} />0
                        <input type="radio" name="cevap24" value="1" onChange={this.answerSelected} />1
                        <input type="radio" name="cevap24" value="2" onChange={this.answerSelected} />2
                        <input type="radio" name="cevap24" value="3" onChange={this.answerSelected} />3
                        <input type="radio" name="cevap24" value="4" onChange={this.answerSelected} />4
                    </div>

                    <div className="sorular">
                        <label>Kendinize zarar vermek için bir planınız var mı?</label><br />
                        <input type="radio" name="cevap25" value="0" onChange={this.answerSelected} />0
                        <input type="radio" name="cevap25" value="1" onChange={this.answerSelected} />1
                        <input type="radio" name="cevap25" value="2" onChange={this.answerSelected} />2
                        <input type="radio" name="cevap25" value="3" onChange={this.answerSelected} />3
                        <input type="radio" name="cevap25" value="4" onChange={this.answerSelected} />4
                    </div>

                    <input className="feedback-button" type="submit" value="submit" />
                    <br /><br /><br />
                </form>
            </div>
        }
        if (isNaN(this.state.toplam) || (this.state.toplam === 0)) {
            toplamlar = ''
        } else if (this.state.toplam > 80) {
            toplamlar = <div className="sorular">
                <label>Toplam Puan</label><br />
                {this.state.toplam}
                <div>Tebrikler! Zırdelisiniz.</div>
            </div>
        } else if (this.state.toplam > 60) {
            toplamlar = <div className="sorular">
                <label>Toplam Puan</label><br />
                {this.state.toplam}
                <div>Tebrikler! Delisiniz.</div>
            </div>
        } else if (this.state.toplam > 40) {
            toplamlar = <div className="sorular">
                <label>Toplam Puan</label><br />
                {this.state.toplam}
                <div>Tebrikler! Biraz Delisiniz.</div>
            </div>
        } else if (this.state.toplam > 20) {
            toplamlar = <div className="sorular">
                <label>Toplam Puan</label><br />
                {this.state.toplam}
                <div>Tebrikler! Günlük olabilecek şeyler.</div>
            </div>
        } else if (this.state.toplam < 20) {
            toplamlar = <div className="sorular">
                <label>Toplam Puan</label><br />
                {this.state.toplam}
                <div>Tebrikler! Sorun yok.</div>
            </div>
        }

        return (
            <div>
                <h1>Delilik Testine Hoş Geldin{isim}</h1>
                <br />
                {cevaplar}
                {toplamlar}
            </div>
        )
    }
}

export default Survey