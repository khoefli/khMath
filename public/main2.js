/*----------------------------------------------------------------------------*/
/* openPage()                                                                 */
/*----------------------------------------------------------------------------*/
function closeAllPages()
{
  const data =
  [
    'toc',
    'loast_1',
    'loast_2',
    'loast_3',
    'loast_4',
    'loast_5',
    'loast_6',
    'loast_7',
    'loast_8',
    'loast_9',
    'loast_10',
    'loast_11',
    'loast_12',

    'home',
    'impressum',
    'about_me',
    'sitemap',

    'lecture_notes',
    'research_articles',

    'key_concepts',

    'Dunford_Schwartz',
    'Reed_Simon',
    'Kato',
    'Yosida',
    'Nagy',
    'Rudin',
  ];

  var i;
  for(i=0; i < data.length; i++)
  {
    var page = document.getElementById(data[i]);
    if(page != null)
      page.style.display = 'none';
    else
      console.log(data[i]);
  }
}

function openPage(id)
{
  closeAllPages();
  document.getElementById(id).style.display = 'block';
}
