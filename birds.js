function leastFrequent(arr, n)   //arr: arrray of things , n:length of arrray
  {
    arr.sort();

    let min = n+1, res_min = -1;
    let counter = 1;

    for (let i = 1; i < n; i++) {
        if (arr[i] == arr[i - 1])
                counter++;
        else {
            if (counter < min) {
                min = counter;
                res_min = arr[i - 1];
            }
            counter = 1;
        }
    }
    if (counter < min)
    {
        min= counter;
        res_min = arr[n - 1];
    }
    return res_min;
  }


function mostFrequent(arr, n)               //arr: arrray of things , n:length of arrray
  {

    arr.sort();

    let max_count = 1, res_max = arr[0];
    let counter = 1;

    for (let i = 1; i < n; i++)
    {
        if (arr[i] == arr[i - 1])
            counter++;
        else
        {
            if (counter > max_count)
            {
                max_count = counter;
                res_max = arr[i - 1];
            }
            counter = 1;
        }
    }

    if (counter > max_count)
    {
        max_count = counter;
        res_max = arr[n - 1];
    }
     return res_max;
   }
