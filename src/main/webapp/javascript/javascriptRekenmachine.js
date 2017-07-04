function c(val)
{
    document.getElementById("nr").value=val;
}
function v(val)
{
    document.getElementById("nr").value+=val;
}
function e()
{
    try
    {
        c(eval(document.getElementById("nr").value))
    }
    catch(e)
    {
        c('Error')
    }
}