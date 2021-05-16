/*
    LAGRIDA Yassine
    Lagyassine@gmail.com
*/
const removeExtension = title => {
    let titleArr = title.split('.');
    titleArr.pop();
    return titleArr.join('');
}
const bigTitle = title => {
    const limit = 30;
    if(title.length <= limit){
        return title;
    }
    const newTitle = title.substr(0, limit-1) + '...';
    return newTitle;
}
const getSize = size => {
    const withKb = size/1024;
    if(withKb < 512){
        return withKb.toPrecision(3) + 'Kb';
    }
    const withMb = withKb/1024;
    return withMb.toPrecision(3) + 'Mb';
}
const mimeTypes = mime => {
    switch(mime){
        case 'video/x-msvideo':
            return 'avi';
        break;
        case 'text/css':
            return 'css';
        break;
        case 'text/csv':
            return 'csv';
        break;
        case 'application/msword':
            return 'doc';
        break;
        case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
            return 'docx';
        break;
        case 'image/gif':
            return 'gif';
        break;
        case 'text/html':
            return 'html'; // htm, html
        break;
        case 'application/java-archive':
            return 'jar';
        break;
        case 'image/jpeg':
            return 'jpeg'; //jpg, jpeg
        break;
        case 'text/javascript':
            return 'js';
        break;
        case 'application/json':
            return 'json';
        break;
        case 'audio/mpeg':
            return 'mp3';
        break;
        case 'video/mp4':
            return 'mp4';
        break;
        case 'image/png':
            return 'png';
        break;
        case 'application/pdf':
            return 'pdf';
        break;
        case 'application/x-httpd-php':
            return 'php';
        break;
        case 'application/vnd.ms-powerpoint':
            return 'ppt';
        break;
        case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
            return 'pptx';
        break;
        case 'application/vnd.rar':
            return 'rar';
        break;
        case 'image/svg+xml':
            return 'svg';
        break;
        case 'text/plain':
            return 'txt';
        break;
        case 'audio/wav':
            return 'wav';
        break;
        case 'application/xhtml+xml':
            return 'xhtml';
        break;
        case 'application/vnd.ms-excel':
            return 'xls';
        break;
        case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
            return 'xlsx';
        break;
        case 'application/xml':
            return 'xml';
        break;
        case 'application/zip':
            return 'zip';
        break;
        default:
            return 'file';
        break;
    }
}
