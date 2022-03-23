

export default async function renderMainPage (req, res){
    try {
        res.render('./main-page');
    } catch (error) {
        console.log(error);
    }
};

