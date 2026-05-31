
function parseinput(text)
{
    let temp = [];
    let result = [];
    let converter;
    temp = text.split(",");

    if(temp.length == 1)
    {
        converter = Number(temp)
        if(!isNaN(converter))
        {
            return converter;
        }
        else
        {
            return null;
        }
        
    }
    else
    {
        for(let i = 0; i < temp.length;i++)
        {
            converter = Number(temp[i]);
            if(!isNaN(converter))
            {
                result.push(converter);
            }
            else
            {
                result.push(null);
            }
        }

        return result;
    }
}


