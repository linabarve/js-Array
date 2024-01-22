

//mode


const prompt =  rquire("prompt-sync")
{
	int i,j;
	int a[5] = {1,2,3,4,2};
	for(i = 0; i < 5; i++)
	{
		for(j = i + 1; j < 5; j++)
		{
			if(a[i] == a[j])
			{
				printf("%d\n",a[i]);
			}
		}
		
	}
	return 0;
