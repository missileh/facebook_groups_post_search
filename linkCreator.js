var baseURL = "https://www.facebook.com/groups/";
var searchPostFix = "/search/?query=";
var totalGroups = linksData.facebook_groups.length;
console.log("totalGroups: " + totalGroups);
var groupIndex = 0;
var searchIndex = 0;
var visitedLinksDiv = null;
var allGroupsExplored = false;

function gotoNextLink()
{
	if (allGroupsExplored == true)
	{
		return;
	}
	
	if (visitedLinksDiv == null)
	{
		visitedLinksDiv = document.getElementById("visitedLinks");
	}
	
	var searchString = linksData.search_queries[searchIndex];
	var urlToOpen = baseURL + linksData.facebook_groups[groupIndex] + searchPostFix + searchString;
	window.open(urlToOpen,'_blank');
	
	var urlDiv = document.createElement('div');
	var urlAnchor = document.createElement("a");
	urlDiv.className = 'facebookLink';
	urlAnchor.href = urlToOpen;
	urlAnchor.target = "_blank";
	urlAnchor.innerHTML = urlToOpen;
	urlDiv.appendChild(urlAnchor);
	visitedLinksDiv.appendChild(urlDiv);
	searchIndex++;
	
	if (searchIndex >= linksData.search_queries.length)
	{
		groupIndex++;
		if (groupIndex >= totalGroups)
		{
			allFacebookGroupsExplored();
			groupIndex = 0;
		}
		searchIndex = 0;
	}
}

function allFacebookGroupsExplored()
{
	allGroupsExplored = true;
}
