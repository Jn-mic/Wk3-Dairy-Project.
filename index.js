
        var total_production , total_earnings;
        var shed_A_production, shed_B_production, shed_C_production, shed_D_production  = 0;
        var cows_in_sheds = {
            'A' : 30,
            'B' : 20,
            'C' : 40,
            'D' : 50,
        }
// monthly calendar.
var days_in_months = {
    'January'   : 31,
    'February'  : 28,
    'March'     : 31,
    'April'     : 30,
    'May'       : 31,
    'June'      : 30,
    'July'      : 31,
    'August'    : 31,
    'September' : 30,   
    'October'   : 31,
    'November'  : 30,
    'December'  : 31,
}
        var ul = document.getElementById("annual_report");
        var ul1 = document.getElementById("compare_report1");
        var ul2 = document.getElementById("compare_report2");

function totalProduction(){
    // parseInt(document.getElementById("for the four shades").value);
        shed_A_production = (cows_in_sheds.A * parseInt(document.getElementById("shed_one").value));
        shed_B_production = (cows_in_sheds.B * parseInt(document.getElementById("shed_two").value));
        shed_C_production = (cows_in_sheds.C * parseInt(document.getElementById("shed_three").value));
        shed_D_production = (cows_in_sheds.D * parseInt(document.getElementById("shed_four").value));
        var buying_rate = (parseInt(document.getElementById("buying_rate").value));
        var time = (parseInt(document.getElementById("time").value));

    total_production = (shed_A_production + shed_B_production + shed_C_production + shed_D_production);

    // console.log( Total Income for shed-A is: ${shed_A_production});
        document.getElementById('shed_a').innerHTML = "Shed A";
        document.getElementById("shed_a_prod").innerHTML = convertCurrency(shed_A_production);
        document.getElementById("shed_b").innerHTML = "Shed B";
        document.getElementById("shed_b_prod").innerHTML = convertCurrency(shed_B_production);
        document.getElementById("shed_c").innerHTML = "Shed C";
        document.getElementById("shed_c_prod").innerHTML = convertCurrency(shed_C_production);
        document.getElementById("shed_d").innerHTML = "Shed D";
        document.getElementById("shed_d_prod").innerHTML = convertCurrency(shed_D_production);

            sales(buying_rate, time);
            generateYearlyReport(buying_rate);
            compareResults(buying_rate, time);
}

function sales(buying_rate, time){
    total_earnings = ((total_production * time) * buying_rate);

        if(time === 7){
            document.getElementById('plant_income').innerHTML = `Your weekly earning is:${total_earnings}`;
        }else if(time == 29 || time == 30 || time == 31){
            document.getElementById('plant_income').innerHTML = `Your monthly earning is: ${total_earnings}`;
        }else if(time == 365){
            document.getElementById('plant_income').innerHTML = `Your yearly earning is: ${total_earnings}`;
        }else if(time === 366){
            document.getElementById('plant_income').innerHTML = `Your earning on a leap year is: ${total_earnings}`;
        }else{
            document.getElementById('plant_income').innerHTML = `The input you entered is not equal to a week, month or year but you total earning so far is: ${total_earnings}`;  
        }
    }
function generateYearlyReport(buying_rate){
        ul.innerHTML = ''
        Object.keys(days_in_months).forEach((key, index) =>{
            var list1= document.createElement('li');
            ul.appendChild(list1);
            list1.innerHTML = `Total income for ${key} is: ${(days_in_months[key] * total_production) * buying_rate}`;   
        })
    }
function compareResults(value_one, value_two){
        ul1.innerHTML = ''
        ul2.innerHTML = ''
        for(month in days_in_months){
            var list2 = document.createElement('li');
            ul1.appendChild(list2);
            list2.innerHTML = `Total income for ${month} is: ${(days_in_months[month] * total_production) * value_one}`;
        }
        for(month in days_in_months){
            var list3= document.createElement('li');
            ul2.appendChild(list3);
            list3.innerHTML = `Total income for ${month} is: ${(days_in_months[month] * total_production) * value_two}`;
        }
    }

function convertCurrency(money){
        var pesa = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'ksh' }).format(money);
        console.log(pesa.toString()) 
        return pesa.toString();
    }
        //Call functions
        totalProduction();
        convertCurrency();


