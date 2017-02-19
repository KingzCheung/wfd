# -*- coding: utf-8 -*-
from flask import flash
from flask import redirect

from app import app
from flask import render_template

from app.forms import LoginForm


@app.route('/')
@app.route('/index')
def index():
    user = {'nickname': 'KingzCheung'}
    user = {'nickname': 'Miguel'}  # fake user
    return render_template("index.html",
                           title='Home',
                           user=user)

@app.route('/login',methods=['GET','POST'])

def login():
    form = LoginForm()

    if form.validate_on_submit():
        flash('Login requested for OpenID="' + form.openid.data + '", remember_me=' + str(form.remember_me.data))
        return redirect('/index')

    return render_template('login.html',title = 'Sign in',form = form)