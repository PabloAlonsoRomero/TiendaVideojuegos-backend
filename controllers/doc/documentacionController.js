const getDocumentacion = async(req, res) => {
    res.render('documentacion', {title: 'Documentacion API'});
}

export default { getDocumentacion }