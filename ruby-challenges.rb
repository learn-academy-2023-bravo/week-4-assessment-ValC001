# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.
## Create an if else method that will determine if a number is even/odd and print out a result based on it.
reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'
def even_or_odd(reposts1)
    if reposts1 %2== 0
        puts "#{reposts1} is even"
  else 
        puts "#{reposts1} is odd"
    end
end
puts even_or_odd(reposts1)


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'
##Pseudo Code
## Create a method that deletes all the vowels.
## Use .delete with the vowels in ().
## List all the vowels both lower and uppercase.
## 
def vowel_cutter(beatles_album1)
  beatles_album1.delete("aeiouAEIOU")
end

puts vowel_cutter("Rubber Soul")

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'
 def is_it_palindrome(palindrome_tester1)
    palindrome_tester1 == palindrome_tester1.reverse
 end
 puts is_it_palindrome("Racecar")