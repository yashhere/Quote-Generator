function generate() {     
	var quotes = [
	"Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.\
	@Bill Keane","To make something special, you just have to believe it's special.\
	@Kunf Fu Panda","Your story may not have such a happy beginning, but that doesn't make you who you are. \
			It is the rest of your story \u2014 who you choose to be.\
	@Kung Fu Panda","You have to dream before your dreams can come true.\
	@Dr. APJ Abdul Kalam","If you want to shine like a sun, first burn like a sun.\
	@Dr. APJ Abdul Kalam","I have never tried to compare myself to anyone else.\
	@Sachin Tendulkar","You cannot believe in God until you believe in yourself.\
	@Swami Vivekanand","If you can't make it good, at least make it look good.\
	@Bill Gates","Design is not just what it looks like and feels like. Design is how it works.\
	@Steve Jobs","Innovation distinguishes between a leader and a follower.\
	@Steve Jobs","Sometimes life is going to hit you in the head with a brick. Don't lose faith.\
	@Steve Jobs","The difference between winning and losing is most often not quitting.\
	@Walt Disney","You can't please everyone, and you can't make everyone like you.\
	@Katie Couric","If your actions inspire others to dream more, learn more, do more and become more, you are a leader.\
	@John Quincy Adams","Don't count the days, make the days count.\
	@Muhammad Ali","Your time is limited, so don't waste it living someone else's life.\
	@Steve Jobs","The best way of learning about anything is by doing.\
	@Richard Branson","Either write something worth reading or do something worth writing.\
	@Benjamin Franklin","You must do the things you think you cannot do.\
	@Eleanor Roosevelt","In a conflict between the heart and the brain, follow your heart.\
	@Swami Vivekanand","Try not to become a man of success, but rather try to become a man of value.\
	@Albert Einstein","Success is how high you bounce when you hit bottom.\
	@George S. Patton","Don't aim for success if you want it; just do what you love and believe in, and it will come naturally.\
	@David Frost"];

	var quote = quotes[Math.floor(Math.random()*quotes.length)];
	var quoteAuthor = quote.split("@");
	document.querySelector('#quote').textContent = quoteAuthor[0];
	document.querySelector('#author').textContent = "\u2014 " + quoteAuthor[1]; 
}
