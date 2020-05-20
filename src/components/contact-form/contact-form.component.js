import React from 'react'

export default function ContactForm() {
    return (
        <form>
            <div className="form-group">
                <label for="exampleFormControlInput1">Họ tên</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" 
                placeholder="Nguyễn Văn A..."/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlInput1">Email</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" 
                placeholder="email@example.com"/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlInput1">Số điện thoại</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" />
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Nội dung</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary" 
            style={{backgroundColor: '#22223b', color: '#f2e9e4', border: 'none'}}>
                Gửi
            </button>
        </form>
    )
}
