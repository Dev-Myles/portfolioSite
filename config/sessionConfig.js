const sessionConfig = {
    name: 'session',
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: false,
        secure: false,
        sameSite: 'lax',
        maxAge: 1000 * 60 
    }
};

export {sessionConfig as default };