import random
import string

password_length = int(input("Enter the length of the password you want to generate: "))

if password_length < 4:
    print("Password should be at least 4 characters.")
else:
    uppercase = string.ascii_uppercase
    lowercase = string.ascii_lowercase
    digits = string.digits
    special = string.punctuation

    # Ensure at least one character from each category
    password = [
        random.choice(uppercase),
        random.choice(lowercase),
        random.choice(digits),
        random.choice(special)
    ]

    all_chars = uppercase + lowercase + digits + special
    password += random.choices(all_chars, k=password_length - 4)

    random.shuffle(password)
    password = "".join(password)

    print("Generated password:", password)
