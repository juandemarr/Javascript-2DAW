var palabra = prompt("Inttroduzca palabra : ");

document.write("<table>");
for(let i=0;i<palabra.length;i++){
    document.write("<tr>");
    for(let j=0;j<palabra.length;j++){
        if(i== 0)
        document.write("<td>" + palabra.charAt(j) + "</td>");
        else if(i == palabra.length-1)
        document.write("<td>" + palabra.charAt(palabra.length-j-1) + "</td>");
        else{
            if(j==0)
                document.write("<td>" + palabra.charAt(i) + "</td>");
            else if(j == palabra.length-1)
            document.write("<td>" + palabra.charAt(palabra.length-i-1) + "</td>");
            else
            document.write("<td></td>");
        }
    }
    document.write("</tr>");
}
document.write("</table>");